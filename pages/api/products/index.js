import nc from 'next-connect';
import db from '../../../utilities/dbConnect';
import Product from '../../../models/Products';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
});

// const handler = async (req, res) => {
//   const { method } = req;
//   dbConnect();
//   switch (method) {
//     case 'GET':
//       try {
//         const products = await Product.find({});
//         res.status(200).json({ success: true, data: products });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;

//     case 'POST':
//       try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;

//     default:
//       res.status(400).json({ success: false });
//       break;
//   }
// };

export default handler;
