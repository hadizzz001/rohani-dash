import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../mongodb';
import { ObjectId } from 'mongodb';


export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
  const id = req.query.pid;
  const product = await client.db("Power").collection("Products").findOne({_id:new ObjectId(`${id}`)});
  if (product) {
         return res.status(200).json(product);
        }
}
return res.status(404).json({success:false});

}
