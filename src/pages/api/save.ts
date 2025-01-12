import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../mongodb';


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const product = req.body.state
  if (req.method === 'POST') {
    // Process a POST request
    // console.log('product: ', product);
    if (!product) return res.status(400).json({success:false})
       const insertReq = await client.db("Power").collection("Products").insertOne(product);
       if (insertReq.acknowledged) {
         return res.status(200).json({success:true});
        }
}
return res.status(404).json({success:false});

}
