import type { NextApiRequest, NextApiResponse } from 'next';
// import client from './mongodb';
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

// MONGODB_URI= "mongodb+srv://nicky234:jc7ap0dFcwvZdo09@cluster0.7cpxz.mongodb.net?retryWrites=true&w=majority"
export default  async (req: NextApiRequest, res: NextApiResponse)  => {
  try {
    if (req.method === 'GET') {
      // Process a POST request


  const tkn = req?.query?.tkn ;

     const token = await jwt.verify(tkn, `FS0FKI9O0QKW91234512N4JNSDKJF9013549JSFISVSAQWEASFASQWR125136B125125DF`);
     if (!token) {throw 'Error generating token'}

     return res.status(200).json({ authorized: true});

}

}
catch(e) {
  console.log('e: ', e);
  return res.status(401).json({ authorized: false });

}
}
