import nc from 'next-connect';
import Product from '../../models/Products';
import User from '../../models/Users';
import db from '../../utilities/dbConnect';
import data from '../../utilities/productsData';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});

export default handler;
