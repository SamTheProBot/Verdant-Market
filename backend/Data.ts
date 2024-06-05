const PLANT_DATA = [
  {
    id: 1,
    name: 'Snake Plant',
    description:
      'The Snake Plant (Sansevieria trifasciata) is a popular succulent known for its air-purifying properties and low-maintenance needs. It thrives in neglect and tolerates low light conditions, making it a perfect choice for beginner plant parents.',
    category: 'Indoor Plants',
    image:
      'https://i.pinimg.com/474x/36/9a/d5/369ad5cade297f440bec64535fb4edb1.jpg',
    price: 19.99,
    features: ['Air-purifying', 'Low-maintenance', 'Low-light tolerant'],
  },
  {
    id: 2,
    name: 'Monstera Deliciosa',
    description:
      "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is a stunning tropical plant with large, split leaves. It's a fast grower and can add a touch of the jungle to your indoor space. Provide it with bright, indirect light and well-draining soil.",
    category: 'Indoor Plants',
    image:
      'https://i.pinimg.com/474x/92/ac/12/92ac125a0f4309376ae7df07e8fb8687.jpg',
    price: 34.99,
    features: ['Fast-growing', 'Air-purifying', 'Climbing vine'],
  },
  {
    id: 3,
    name: 'Golden Pothos',
    description:
      'The Golden Pothos (Epipremnum aureum) is another easy-to-care-for indoor plant. Its cascading vines with heart-shaped, golden leaves add a touch of elegance to any room. It thrives in medium light and moist soil.',
    category: 'Indoor Plants',
    image:
      'https://i.pinimg.com/474x/18/7d/91/187d91df4ec79810b47d0522b2b61d91.jpg',
    price: 14.99,
    features: ['Easy to care for', 'Trailing vine', 'Air-purifying'],
  },
  {
    id: 4,
    name: 'Lavender',
    description:
      'Lavender (Lavandula angustifolia) is a beautiful flowering herb with fragrant purple blooms. It thrives in full sun and well-draining soil. Not only does it add a touch of color to your garden, but the scent is also known for its calming properties.',
    category: 'Outdoor Plants',
    image:
      'https://i.pinimg.com/474x/80/2a/05/802a0577baaed057e19c78ead5177444.jpg',
    price: 9.99,
    features: ['Fragrant flowers', 'Full sun', 'Drought-tolerant'],
  },
  {
    id: 5,
    name: 'Succulent Mix',
    description:
      'This assortment of colorful succulents is a perfect way to bring a touch of the desert to your home. Succulents come in a wide variety of shapes and sizes, and they require minimal care. Plant them in a pot with drainage holes and well-draining succulent mix, and water them only when the soil is completely dry.',
    category: 'Indoor Plants',
    image:
      'https://i.pinimg.com/474x/08/1c/e6/081ce60a0b3ef6e714014aa5f488e247.jpg',
    price: 24.99,
    features: [
      'Low-maintenance',
      'Variety of shapes and sizes',
      'Drought-tolerant',
    ],
  },
  {
    id: 6,
    name: 'Fiddle Leaf Fig',
    description:
      'The Fiddle Leaf Fig (Ficus lyrata) is a popular houseplant known for its large, glossy leaves. It thrives in bright, indirect light and prefers consistent watering. Provide it with a well-draining potting mix and fertilize it monthly during the growing season.',
    category: 'Indoor Plants',
    image:
      'https://i.pinimg.com/474x/48/fd/20/48fd2094641c0464c6a04cb146353e69.jpg',
    price: 49.99,
    features: ['Large, glossy leaves', 'Air-purifying', 'Can grow tall'],
  },
  {
    id: 7,
    name: 'Spider Plant',
    description:
      'The Spider Plant (Chlorophytum comosum) is a popular and easy-to-care-for indoor plant. It produces long, cascading vines with spiderettes that sprout new plantlets. It thrives in medium to bright, indirect light and prefers moist soil.',
    category: 'Indoor Plants',
    image:
      'https://i.pinimg.com/474x/4a/d4/c3/4ad4c30d4a39c24108d7bba39a4571b1.jpg',
    price: 12.99,
    features: [
      'Easy to care for',
      'Produces baby spiderettes',
      'Air-purifying',
    ],
  },
  {
    id: 8,
    name: 'ZZ Plant',
    description:
      'The ZZ Plant (Zamioculcas zamiifolia) is a low-maintenance indoor plant known for its tolerance for neglect. It features glossy, dark green leaves and can survive in low light conditions. Water it only when the soil is completely dry.',
    category: 'Indoor Plants',
    image:
      'https://i.pinimg.com/474x/a4/5f/55/a45f5562e8262cd94cf09597c09c0333.jpg',
    price: 29.99,
    features: ['Low-maintenance', 'Tolerates low light', 'Air-purifying'],
  },
  {
    id: 9,
    name: 'Peace Lily',
    description:
      'The Peace Lily (Spathiphyllum wallisii) is a beautiful indoor plant known for its white, air-purifying flowers. It thrives in medium to low light conditions and prefers consistently moist soil. The leaves droop when thirsty, making it easy to know when it needs watering.',
    category: 'Indoor Plants',
    image:
      'https://i.pinimg.com/474x/05/f3/a5/05f3a5925f6f555887983764c197b5d9.jpg',
    price: 19.99,
    features: ['Air-purifying', 'White flowers', 'Low light tolerant'],
  },
  {
    id: 10,
    name: 'Calathea',
    description:
      'Calatheas are a group of tropical plants known for their vibrantly colored and patterned leaves. They come in a wide variety and require medium to bright, indirect light and consistently moist soil. They thrive in humid environments, so misting them regularly is recommended.',
    category: 'Indoor Plants',
    image:
      'https://i.pinimg.com/474x/cf/e7/66/cfe7663285a258b59a2aed1d19494fa6.jpg',
    price: 24.99,
    features: ['Vibrant foliage', 'Air-purifying', 'Humidity lover'],
  },
  {
    id: 11,
    name: 'Rosemary',
    description:
      'Rosemary (Rosmarinus officinalis) is a fragrant herb perfect for both culinary and ornamental purposes. It thrives in full sun and well-draining soil. Prune it regularly to encourage bushier growth. You can use the fresh leaves in cooking or enjoy the beautiful purple flowers it produces.',
    category: 'Outdoor Plants',
    image:
      'https://i.pinimg.com/474x/0c/67/be/0c67beb8084cb95f33177b76a492c31d.jpg',
    price: 7.99,
    features: ['Culinary herb', 'Fragrant', 'Full sun tolerant'],
  },
  {
    id: 12,
    name: 'Basil',
    description:
      'Basil (Ocimum basilicum) is a popular and easy-to-grow herb known for its delicious flavor. It thrives in full sun and moist soil. Pinch off the flower buds to encourage bushier growth. Fresh basil leaves are a perfect addition to many dishes.',
    category: 'Outdoor Plants',
    image:
      'https://i.pinimg.com/474x/63/08/4e/63084eddd21908e9ccc40fed9d3defda.jpg',
    price: 5.99,
    features: ['Culinary herb', 'Easy to grow', 'Full sun tolerant'],
  },
  {
    id: 13,
    name: 'Aloe Vera',
    description:
      'Aloe Vera is a succulent plant known for its medicinal properties. It thrives in bright, indirect light and well-draining soil. It requires minimal watering, making it an excellent choice for busy individuals.',
    category: 'Indoor Plants',
    image:
      'https://i.pinimg.com/474x/f8/c8/6e/f8c86e06e949b84a8d1b462904875912.jpg',
    price: 15.99,
    features: ['Medicinal', 'Low-maintenance', 'Bright light'],
  },
  {
    id: 14,
    name: 'English Ivy',
    description:
      'English Ivy (Hedera helix) is a versatile indoor plant that can be grown as a hanging or climbing vine. It prefers medium to bright, indirect light and evenly moist soil.',
    category: 'Indoor Plants',
    image:
      'https://i.pinimg.com/474x/a0/7b/a4/a07ba42eb47b3832e973a42a0ee2a28e.jpg',
    price: 13.99,
    features: ['Climbing vine', 'Air-purifying', 'Easy to grow'],
  },
  {
    id: 15,
    name: 'Rose',
    description:
      'Roses (Rosa spp.) are classic outdoor plants known for their beautiful and fragrant flowers. They require full sun and well-draining soil. Prune them regularly to encourage healthy growth.',
    category: 'Outdoor Plants',
    image:
      'https://i.pinimg.com/474x/e6/93/10/e69310586de67103adab7cf7b8a356ae.jpg',
    price: 19.99,
    features: ['Fragrant flowers', 'Full sun', 'Prune regularly'],
  },
  {
    id: 16,
    name: 'Mint',
    description:
      'Mint (Mentha spp.) is a fast-growing herb with a refreshing scent. It thrives in full sun to partial shade and moist soil. Mint is great for culinary uses and can be grown in pots to contain its spread.',
    category: 'Outdoor Plants',
    image:
      'https://i.pinimg.com/474x/e5/de/04/e5de0415eabe4dd400bb979fe4785eff.jpg',
    price: 4.99,
    features: ['Culinary herb', 'Fast-growing', 'Refreshing scent'],
  },
  {
    id: 17,
    name: 'Geranium',
    description:
      'Geraniums (Pelargonium spp.) are popular outdoor plants with vibrant flowers. They thrive in full sun and well-draining soil. Geraniums are relatively low-maintenance and can add a splash of color to any garden.',
    category: 'Outdoor Plants',
    image:
      'https://i.pinimg.com/474x/2d/d7/2d/2dd72d4224130c17cab306c02cc87a47.jpg',
    price: 11.99,
    features: ['Vibrant flowers', 'Full sun', 'Low-maintenance'],
  },
  {
    id: 18,
    name: 'Orchid',
    description:
      'Orchids are elegant indoor plants known for their stunning flowers. They prefer bright, indirect light and well-draining orchid mix. Maintain high humidity and water them when the potting mix is dry.',
    category: 'Indoor Plants',
    image:
      'https://i.pinimg.com/474x/c8/e6/32/c8e63262bea8c63f6c4c9ea657b7b7a9.jpg',
    price: 29.99,
    features: ['Stunning flowers', 'Bright light', 'High humidity'],
  },
  {
    id: 19,
    name: 'Echeveria',
    description:
      'Echeveria is a type of succulent with rosette-shaped leaves. It thrives in bright light and well-draining soil. Water it sparingly, as it is drought-tolerant.',
    category: 'Indoor Plants',
    image:
      'https://i.pinimg.com/474x/d8/06/c8/d806c806efa263863474dc5a99ec1997.jpg',
    price: 9.99,
    features: ['Rosette-shaped', 'Bright light', 'Drought-tolerant'],
  },
  {
    id: 20,
    name: 'Daffodil',
    description:
      'Daffodils (Narcissus spp.) are cheerful outdoor plants with bright yellow flowers. They thrive in full sun to partial shade and well-draining soil. Plant them in the fall for a burst of color in the spring.',
    category: 'Outdoor Plants',
    image:
      'https://i.pinimg.com/474x/27/45/50/274550a9d234782b635a796cd1c5b7f4.jpg',
    price: 7.99,
    features: ['Bright flowers', 'Full sun', 'Spring blooms'],
  },
  {
    id: 21,
    name: 'Chamomile',
    description:
      'Chamomile (Matricaria chamomilla) is a fragrant herb known for its daisy-like flowers and soothing properties. It thrives in full sun and well-draining soil. Harvest the flowers for tea or use them as a calming addition to your garden.',
    category: 'Outdoor Plants',
    image:
      'https://i.pinimg.com/474x/c3/01/0f/c3010fbe9683b436d8afcbb9a5667366.jpg',
    price: 6.99,
    features: ['Fragrant', 'Full sun', 'Soothing'],
  },
  {
    id: 22,
    name: 'Fern',
    description:
      'Ferns are lush indoor plants that thrive in low to medium light and high humidity. They prefer consistently moist soil. Their feathery fronds add a touch of greenery to any indoor space.',
    category: 'Indoor Plants',
    image:
      'https://i.pinimg.com/474x/0e/49/c8/0e49c8c7114674689fbb99c8c28b6107.jpg',
    price: 14.99,
    features: ['Lush foliage', 'Low light', 'High humidity'],
  },
  {
    id: 23,
    name: 'Thyme',
    description:
      'Thyme (Thymus vulgaris) is a versatile herb perfect for culinary use. It thrives in full sun and well-draining soil. Prune it regularly to encourage bushier growth. Fresh thyme leaves add flavor to a variety of dishes.',
    category: 'Outdoor Plants',
    image:
      'https://i.pinimg.com/474x/22/6a/dd/226addca8c0697299dd935a845e37a7a.jpg',
    price: 5.99,
    features: ['Culinary herb', 'Full sun', 'Easy to grow'],
  },
  {
    id: 24,
    name: 'Jade Plant',
    description:
      'The Jade Plant (Crassula ovata) is a succulent with thick, glossy leaves. It thrives in bright light and well-draining soil. Water it sparingly, and it can live for many years, growing into a small tree.',
    category: 'Indoor Plants',
    image:
      'https://i.pinimg.com/474x/46/17/25/4617252a43561e640e395affab342b5e.jpg',
    price: 19,
  },
];

export default PLANT_DATA;
