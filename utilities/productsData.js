import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'ola',
      email: 'ola@gmail.com',
      password: bcrypt.hashSync('38848449'),
      isAdmin: true,
    },
    {
      name: 'biodun',
      email: 'biodun@gmail.com',
      password: bcrypt.hashSync('83478439089'),
      isAdmin: false,
    },
    {
      name: 'jide',
      email: 'jide@gmail.com',
      password: bcrypt.hashSync('093788383940'),
      isAdmin: false,
    },
    {
      name: 'bimbo',
      email: 'bimbo@gmail.com',
      password: bcrypt.hashSync('4243536738'),
      isAdmin: false,
    },
  ],

  products: [
    {
      // id: 1,
      name: 'running canvas',
      slug: 'running-canvas',
      category: 'Shoes',
      brand: 'zachary-keimig',
      price: 97,
      rating: 5.0,
      numReviews: 13,
      countInStock: 43,
      description: 'A sleeky Nike running canvas',
      image: '/images/zachary-keimig.jpg',
    },

    {
      // id: 2,
      name: 'wine levis shoe',
      slug: 'wine-levis-shoe',
      category: 'Shoes',
      brand: 'Paul Gaudriault',
      price: 120,
      rating: 4.8,
      numReviews: 513,
      countInStock: 53,
      description: 'A beatiful levis sneakers',
      image: '/images/paul-gaudriault.jpg',
    },

    {
      // id: 3,
      name: 'nike sneaker',
      slug: 'nike-sneaker',
      category: 'Shoes',
      brand: 'Andres Jasso',
      price: 97,
      rating: 5.0,
      numReviews: 13,
      countInStock: 43,
      description: 'A sleeky Nike sneakers',
      image: '/images/andres-jasso.jpg',
    },

    {
      // id: 4,
      name: 'brown brogue',
      slug: 'brown-brogue',
      category: 'Shoes',
      brand: 'Iman Ameli',
      price: 97,
      rating: 5.0,
      numReviews: 13,
      countInStock: 43,
      description: 'A brown leather brogue shoe',
      image: '/images/iman-ameli.jpg',
    },

    {
      // id: 5,
      name: 'slim dress shirt',
      slug: 'slim-dress-shirt',
      category: 'Shirts',
      brand: 'Nimble Made',
      price: 17,
      rating: 3.5,
      numReviews: 3,
      countInStock: 33,
      description:
        "Nimble Made is a men's actually slim dress shirt brand striving for size inclusion and Asian representation in menswear",
      image: '/images/nimble-made.jpg',
    },
    {
      // id: 6,
      name: 'round neck',
      slug: 'round-neck',
      category: 'Shirts',
      brand: 'Haryo setyadi',
      price: 6.5,
      rating: 3.0,
      numReviews: 21,
      countInStock: 14,
      description: 'A cotton round neck',
      image: '/images/haryo-setyadi.jpg',
    },

    {
      // id: 7,
      name: 'satin t-shirt',
      slug: 'satin-t-shirt',
      category: 'Shirts',
      brand: 'elCarito',
      price: 13,
      rating: 4.0,
      numReviews: 8,
      countInStock: 40,
      description: 'A quality satin T-shirt',
      image: '/images/elcarito.jpg',
    },

    {
      // id: 8,
      name: 'rainbow shirt',
      slug: 'rainbow-shirt',
      category: 'Shirts',
      brand: 'fares-hamouche',
      price: 6.5,
      rating: 3.0,
      numReviews: 21,
      countInStock: 14,
      description: 'A cotton round neck',
      image: '/images/fares-hamouche.jpg',
    },

    {
      // id: 9,
      name: 'brown jacket',
      slug: 'brown-jacket',
      category: 'Jackets',
      brand: 'Tobias Tullius',
      price: 37,
      rating: 4.0,
      numReviews: 27,
      countInStock: 12,
      description: 'A high quality nylon jacket',
      image: '/images/tobias-tullius.jpg',
    },

    {
      // id: 10,
      name: 'blue jacket',
      slug: 'blue-jacket',
      category: 'Jackets',
      brand: 'Zach Castillo',
      price: 40,
      rating: 5.0,
      numReviews: 98,
      countInStock: 117,
      description: 'A harsh weather jackets',
      image: '/images/zach-castillo.jpg',
    },
    {
      // id: 11,
      name: 'black jacket',
      slug: 'black-jacket',
      category: 'Jackets',
      brand: 'Hamid Tajik',
      price: 300,
      rating: 4.0,
      numReviews: 834,
      countInStock: 56,
      description: 'A beatiful leather jacket',
      image: '/images/hamid-tajik.jpg',
    },

    {
      // id: 12,
      name: 'overall Jacket',
      slug: 'overall-jacket',
      category: 'Jackets',
      brand: 'Nassim Boughazi',
      price: 460,
      rating: 3.7,
      numReviews: 330,
      countInStock: 84,
      description: 'A full length nylon jacket',
      image: '/images/nassim-boughazi.jpg',
    },

    {
      // id: 13,
      name: 'fit jean',
      slug: 'fit-jean',
      category: 'Jeans',
      brand: 'Mnz',
      price: 60,
      rating: 4.6,
      numReviews: 650,
      countInStock: 516,
      description: 'A silky pencil jean',
      image: '/images/mnz.jpg',
    },

    {
      // id: 14,
      name: 'ripped jean',
      slug: 'ripped-jean',
      category: 'Jeans',
      brand: 'Alicia Petresc',
      price: 70,
      rating: 4.9,
      numReviews: 350,
      countInStock: 506,
      description: 'A cotton ripped jean',
      image: '/images/alicia-petresc.jpg',
    },

    {
      // id: 15,
      name: 'baggy jean',
      slug: 'baggy-jean',
      category: 'Jeans',
      brand: 'Ben Tofan',
      price: 99,
      rating: 4.2,
      numReviews: 1270,
      countInStock: 38,
      description: 'A millenia baggy jean',
      image: '/images/ben-tofan.jpg',
    },

    {
      // id: 16,
      name: 'blue gown',
      slug: 'blue-gown',
      category: 'Jeans',
      brand: 'Engin Akyurt',
      price: 20,
      rating: 4.0,
      numReviews: 69,
      countInStock: 54,
      description: 'A blue ladies gown',
      image: '/images/engin-akyurt.jpg',
    },

    {
      // id: 17,
      name: 'black suit',
      slug: 'black-suit',
      category: 'Suits',
      brand: 'Mohamad Khosravi',
      price: 190,
      rating: 4.2,
      numReviews: 96,
      countInStock: 174,
      description: 'An all black suit with a free inner shirt',
      image: '/images/mohamad-khosravi.jpg',
    },

    {
      // id: 18,
      name: 'brown suit',
      slug: 'brown-suit',
      category: 'Suits',
      brand: 'Logan Weaver',
      price: 990,
      rating: 5.0,
      numReviews: 2796,
      countInStock: 17,
      description: 'A brown cotton suit',
      image: '/images/logan-weaver.jpg',
    },

    {
      // id: 19,
      name: 'blue suit',
      slug: 'blue-suit',
      category: 'Suits',
      brand: 'Benjamin Rascoe',
      price: 718,
      rating: 4.8,
      numReviews: 196,
      countInStock: 48,
      description: 'A dark blue suit with a light blue initials ',
      image: '/images/benjamin-rascoe.jpg',
    },

    {
      // id: 20,
      name: 'white suit',
      slug: 'white-suit',
      category: 'Suits',
      brand: 'Aiony Haust',
      price: 699,
      rating: 5.0,
      numReviews: 3452,
      countInStock: 12,
      description: 'An all white ladies suit ',
      image: '/images/aiony-haust.jpg',
    },

    {
      // id: 21,
      name: 'basket-like hat',
      slug: 'basket-like-hat',
      category: 'Hats',
      brand: 'Mary Oloumi',
      price: 10,
      rating: 3.7,
      numReviews: 396,
      countInStock: 614,
      description: 'A basket-like multi-color hat',
      image: '/images/mary-oloumi.jpg',
    },

    {
      // id: 22,
      name: 'cowboy hat',
      slug: 'cowboy-hat',
      category: 'Hats',
      brand: 'Megan Bucknall',
      price: 23,
      rating: 4.7,
      numReviews: 806,
      countInStock: 84,
      description: 'A brown silky cowboy hat',
      image: '/images/megan-bucknall.jpg',
    },

    {
      // id: 23,
      name: 'head warmer',
      slug: 'head-warmer',
      category: 'Hats',
      brand: 'Fabio Alves',
      price: 3,
      rating: 3.9,
      numReviews: 12,
      countInStock: 1239,
      description: 'A made with cotton head warmer',
      image: '/images/fabio-alves.jpg',
    },

    {
      // id: 24,
      name: 'gray cap',
      slug: 'gray-cap',
      category: 'Hats',
      brand: 'Ahmed Syed',
      price: 17.4,
      rating: 4.4,
      numReviews: 1396,
      countInStock: 218,
      description: 'A gray face cap',
      image: '/images/ahmed-syed.jpg',
    },
  ],
};

export default data;
