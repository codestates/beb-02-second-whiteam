const { sequelize } = require('../models');
const {
  web3,
  serverAccount,
  getBytecode,
  getAddress,
} = require('../blockchain');
const {
  whiteFactoryAddress,
  whiteFactoryABI,
} = require('../blockchain/contracts.json');

module.exports = {
  collection: {
    get: async (req, res) => {
      try {
        const sql = `
					SELECT *
					FROM collection
				`;
        const [records, _] = await sequelize.query(sql);

        res.status(200).json(records);
      } catch (err) {
        res.status(500).send('Internal Server Error');
      }
    },
    post: async (req, res) => {
      const { collection_name, collection_symbol, creator } = req.body;
      if (!(collection_name && collection_symbol && creator)) {
        return res.status(400).send('Bad Request');
      }

      try {
        const bytecode = getBytecode(
          collection_name,
          collection_symbol,
          serverAccount.address,
        );
        const salt = parseInt(Number(creator) / 10e35);
        const address = getAddress(whiteFactoryAddress, salt, bytecode);

        const contract = new web3.eth.Contract(
          whiteFactoryABI,
          whiteFactoryAddress,
        );
        const rawTx = {
          to: whiteFactoryAddress,
          gas: await contract.methods.deploy(bytecode, salt).estimateGas({
            from: serverAccount.address,
          }),
          data: contract.methods.deploy(bytecode, salt).encodeABI(),
        };
        const signedTransaction = await serverAccount.signTransaction(rawTx);
        web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);

        const sql = `
					INSERT INTO collection (collection_name, collection_symbol, contract_addr, creator, created_at, updated_at)
					VALUES (?, ?, ?, ?, ?, ?)
				`;
        const replacements = [
          collection_name,
          collection_symbol,
          address,
          creator,
          new Date(),
          new Date(),
        ];
        await sequelize.query(sql, { replacements });

        res.status(201).send('Created');
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
    },
  },
};
