const { sequelize } = require('../models');
const { web3 } = require('../blockchain');

module.exports = {
  signin: {
    post: async (req, res) => {
      try {
        const sql = `
					SELECT user_name, user_email, user_addr, token_quantity
					FROM user
					WHERE user_name = ?
				`;
        const replacements = [req.body.user_name];
        const [records, _] = await sequelize.query(sql, { replacements });
        if (records.length === 0) {
          return res.status(403).send('Forbidden');
        }
        res.status(200).json(records);
      } catch (err) {
        res.status(500).send('Internal Server Error');
      }
    },
  },
  signup: {
    post: async (req, res) => {
      const { user_name, user_email } = req.body;
      if (!(user_name && user_email)) {
        return res.status(400).send('Bad Request');
      }
      try {
        const account = web3.eth.accounts.create();
        const sql = `
					INSERT INTO user (user_name, user_email, user_addr, private_key, token_quantity, created_at, updated_at)
					VALUES (?, ?, ?, ?, ?, ?, ?)
				`;
        const replacements = [
          user_name,
          user_email,
          account.address,
          account.privateKey,
          0,
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
};
