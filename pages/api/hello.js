// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import db from '../../utilities/dbConnect';

// import db from '../../utilities/db';

export default async function helloAPI(req, res) {
  // await db.connect();
  // await db.disconnect();
  res.status(200).json({ name: 'John Doe' });
}

// const helloAPI = async (req, res) => {
//   // await db.connect();
//   // await db.disconnect();
//   res.status(200).json({ name: 'John Doe' });
// };

// export default helloAPI;
