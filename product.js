const products = [
  {
    id: "1",
    title: "Ugly Love",
    price: 500,
    author: "Colleen Hoover",
    description: "Drama",
    tags: ["Drama", "Comedy"],
    image: "tech1.jpg",
  },
  {
    id: "2",
    title: "The Alchemist",
    price: 300,
    author: "Paulo Coelho",
    description: "Slice of life",
    tags: ["Drama", "Life"],
    image: "tech2.jpg",
  },
  {
    id: "3",
    title: "The Kite Runner",
    price: 400,
    author: "Khalid Hosseini",
    description: "Slice of life",
    tags: ["Drama", "Life", "Love"],
    image: "tech3.jpg",
  },
];

const addProducts = (product) => {
  products.push(product);
};

module.exports = {
  products,
  addProducts,
};
