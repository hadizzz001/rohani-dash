import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../mongodb';

// fake data
// import products from '../../utils/data/products';

export default async (_req: NextApiRequest, res: NextApiResponse) => {

  // const product = _req.body.product
  if (_req.method === 'GET') {


    let limit = typeof Number(_req.query.limit) === 'number' ? Number(_req.query.limit) : 50;
    // maloma ma7sora
    // 5abera basera
    // kabera
    // Process a POST request
    // if (!product) return res.status(400).json({success:false})
       const ProductsCollection = await client.db("Power").collection("Orders")
       const docs = await ProductsCollection.find({}).limit(limit )
      //  console.log('docs: ', docs);
      //  console.log('docs: ', docs);
      const products : any[] = [];
       await docs.forEach((prod:any) =>{
        // console.log('prod: ', prod);
        const product = { ...prod, uploadDate: prod._id.getTimestamp().toLocaleDateString() };
        // console.log('product: ', product);
              products.push(product);
        })
        if (products.length > 0) {
          // console.log('products: ', products);
          // console.log('products: ', products);
            return res.status(200).json(products);
          }
}
return res.status(404).json({success:false});
    // return res.status(200).send(products)
}
