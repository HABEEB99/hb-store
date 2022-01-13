import nc from 'next-connect';
import db from '../../../utilities/dbConnect';
import User from '../../../models/Users';
import bcrypt from 'bcryptjs';
import { signToken } from '../../../utilities/auth';

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const users = await User.findOne({ email: req.body.email });
  await db.disconnect();
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    const token = signToken(user);
    res.send({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401).send({
      message: 'Invalid usernsme or password',
    });
  }
});

export default handler;
