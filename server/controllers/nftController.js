const { sequelize } = require('../models');
const { web3, serverAccount, ipfs } = require('../blockchain');
const { whiteNFTABI } = require('../blockchain/contracts.json');

module.exports = {
  nft: {
    get: async (req, res) => {
      try {
        const sql = `
					SELECT *
					FROM nft
				`;
        const [records, _] = await sequelize.query(sql);

        res.status(200).json(records);
      } catch (err) {
        res.status(500).send('Internal Server Error');
      }
    },
    post: async (req, res) => {
      const {
        collection_id,
        contract_addr,
        owner,
        nft_name,
        nft_description,
        image,
      } = req.body;
      if (
        !(
          collection_id &&
          contract_addr &&
          owner &&
          nft_name &&
          nft_description &&
          image
        )
      ) {
        return res.status(400).send('Bad Request');
      }

      try {
        const imageIpfs = await ipfs.add(Buffer.from(image));
        const metadata = {
          name: nft_name,
          description: nft_description,
          image: `https://ipfs.io/ipfs/${imageIpfs[0].path}`,
        };
        const metadataIpfs = await ipfs.add(
          Buffer.from(JSON.stringify(metadata)),
        );

        const contract = new web3.eth.Contract(whiteNFTABI, contract_addr);
        const token_id =
          Number(
            await contract.methods.currentTokenIds().call({
              from: serverAccount.address,
            }),
          ) + 1;
        const rawTx = {
          to: contract_addr,
          gas: await contract.methods
            .mintNFT(owner, metadataIpfs[0].path)
            .estimateGas({
              from: serverAccount.address,
            }),
          data: contract.methods
            .mintNFT(owner, metadataIpfs[0].path)
            .encodeABI(),
        };
        const signedTransaction = await serverAccount.signTransaction(rawTx);
        web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);

        const sql = `
					INSERT INTO nft (collection_id, owner, token_id, nft_name, nft_description, image_uri, created_at, updated_at)
					VALUES (?, ?, ?, ?, ?, ?, ?, ?)
				`;
        const replacements = [
          collection_id,
          owner,
          token_id,
          nft_name,
          nft_description,
          `https://ipfs.io/ipfs/${imageIpfs[0].path}`,
          new Date(),
          new Date(),
        ];
        await sequelize.query(sql, { replacements });

        res.status(201).send('Created');
      } catch (err) {
        res.status(500).send('Internal Server Error');
      }
    },
  },
  transfer: {
    post: async (req, res) => {
      const { from, to, nft_id, token_id } = req.body;
      if (!(from && to && nft_id)) {
        return res.status(400).send('Bad Request');
      }

      try {
        let sql = `
					SELECT contract_addr
					FROM collection
					WHERE id = (
						SELECT collection_id
						FROM nft
						WHERE id = ?
					)
				`;
        let replacements = [nft_id];
        let [records, _] = await sequelize.query(sql, { replacements });

        const contract = new web3.eth.Contract(
          whiteNFTABI,
          records[0].contract_addr,
        );
        const rawTx = {
          to: records[0].contract_addr,
          gas: await contract.methods
            .transferFrom(from, to, token_id)
            .estimateGas(),
          data: contract.methods.transferFrom(from, to, token_id).encodeABI(),
        };
        const signedTransaction = await serverAccount.signTransaction(rawTx);
        web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);

        sql = `
					UPDATE nft
					SET owner = ?
					WHERE id = ?
				`;
        replacements = [to, nft_id];
        await sequelize.query(sql, { replacements });

        res.status(200).send('OK');
      } catch (err) {
        res.status(500).send('Internal Server Error');
      }
    },
  },
};
