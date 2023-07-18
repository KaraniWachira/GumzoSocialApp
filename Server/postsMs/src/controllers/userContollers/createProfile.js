const mssql = require('mssql');
const config = require('../config/userConfig');

async function CreateProfile(req, res) {
  // console.log(config)
  try{
        let sql = await mssql.connect(config);
        let user = req.body;
        if (sql.connected) {
            const request = new mssql.Request(sql);
            request.input('profileImage',user.ProfileImage)
            .input('userName',user.UserName)
            .input('profileDescription',user.ProfileDescription)
            const results = await request.execute('CreateProfile');
            res.json(req.body);
        }
  }
   catch (error) {
      console.error('Error creating profile:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

module.exports = CreateProfile
