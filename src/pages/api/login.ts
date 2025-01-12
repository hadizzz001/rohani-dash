import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../mongodb';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const saltRounds = 10;

// MONGODB_URI= "mongodb+srv://nicky234:jc7ap0dFcwvZdo09@cluster0.7cpxz.mongodb.net?retryWrites=true&w=majority"
export default  async (req: NextApiRequest, res: NextApiResponse)  => {
  try {


  const request = req.body.values;
  const Email = request.email;
  const Password = request.password;
  // console.log('request: ', request);

 

  if(Email && Password) {
    const users = client.db("Power").collection("Users");
    const admin = await users.findOne({Email})

    // console.log('admin: ', admin);
    if (!admin) {
      throw 'Error, incorrect credentials'
    }
    // const isSameUser = admin.password === Password && admin.email === Email
    // console.log('isSameUser: ', isSameUser);
    const isSameUser = await bcrypt.compare(Password, admin.Password);
    if(isSameUser) {
     const token = await jwt.sign({ id:admin._id,Name:admin.Name,Email:admin.Email }, `FS0FKI9O0QKW91234512N4JNSDKJF9013549JSFISVSAQWEASFASQWR125136B125125DF`,{ expiresIn: '42h' });
     if (!token) {throw 'Error generating token'}

     return res.status(200).json({ authorized: true,jwt: token});
    }
    throw 'Error, Incorrect Email or Password'
  } else {
    return res.status(401).json({ authorized: false });
  }
}
catch(e) {
  console.log('e: ', e);
  return res.status(401).json({ authorized: false });

}
}
