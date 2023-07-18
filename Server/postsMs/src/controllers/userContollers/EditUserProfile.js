const mssql = require('mssql');
const config = require('../../config/userConfig');

async function EditUserProfile(req, res) {
  try {
    let sql = await mssql.connect(config);
    let user = req.body;
    // console.log(user)
    if (sql.connected) {
      const results = await sql.request()
        .input('userID', user.UserID)
        .input('newUserName', user.UserName)
        .input('profileImage', user.ProfileImage)
        .input('profileDescription', user.ProfileDescription)
        .execute('EditUserProfile');
      res.json({
        success: true,
        message: "Profile edited successfully",
        results: results.recordset[0]
      });
      console.log(results)
    }
  }
  catch (error) {
    console.error('Error while editing user profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = EditUserProfile
