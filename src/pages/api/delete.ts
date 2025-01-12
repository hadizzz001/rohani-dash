import type {NextApiRequest, NextApiResponse}
from 'next';
import client from '../../mongodb';
import {ObjectId} from 'mongodb';

export default async(req : NextApiRequest, res : NextApiResponse) => {
    try {

        const id = req.body.id;
        const jwt = req.body.jwt;
        if (req.method === 'POST') {
            // Process a POST request
            if (!jwt || !id) {
                return res
                    .status(400)
                    .json({success: false});
            }

            const deletedProduct = await client
                .db("Power")
                .collection("Products")
                .deleteOne({
                    "_id": new ObjectId(`${id}`)
                });
            // console.log('deletedProduct: ', deletedProduct);
            if (deletedProduct
                ?.acknowledged && deletedProduct
                    ?.deletedCount !== 0) {
                return res
                    .status(200)
                    .json({success: true});
            }
        }
        return res
            .status(400)
            .json({success: false});
    } catch (e) {
        console.log('e: ', e);
        return res
            .status(400)
            .json({success: false});
    }

}
