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

export default handler;
