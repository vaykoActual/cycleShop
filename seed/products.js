const db = require("../db/connection");
const Product = require("../models/product");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const motorcycles = [
    {
      name: "Road Glide",
      imgURL:
        "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2021/2021-road-glide-special/2021-road-glide-special-e99b/2021-road-glide-special-e99b-motorcycle.jpg?impolicy=myresize&rw=500",
      description:
        "The benchmark for long-distance touring bikes. Runs mile after mile with ease.",
      price: "27000",
      brand: "Harley Davidson",
    },
    {
      name: "Street Glide",
      imgURL:
        "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2021/2021-street-glide/2021-street-glide-e77/2021-street-glide-e77-motorcycle.jpg?impolicy=myresize&rw=500",
      description: "The original stripped-down hot-rod bagger.",
      price: "25000",
      brand: "Harley Davidson",
    },
    {
      name: "Low Rider S",
      imgURL:
        "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2021/2021-low-rider-s/2021-low-rider-s-f20/2021-low-rider-s-f20-motorcycle.jpg?impolicy=myresize&rw=500",
      description: "A blacked-out, factory custom performance cruiser.",
      price: "25000",
      brand: "Harley Davidson",
    },
    {
      name: "YZF-R1M",
      imgURL:
        "https://yamaha.scdn5.secure.raxcdn.com/library/img.jpg?id=5f4be2602a0ab63a745a4bac&w=1600",
      description:
        "Featuring next‑generation R‑Series styling, sophisticated electronic control, supersport braking and suspension performance and a high‑performance crossplane engine.",
      price: "26000",
      brand: "Yamaha",
    },
    {
      name: "SUPER TÉNÉRÉ ES",
      imgURL:
        "https://yamaha.scdn5.secure.raxcdn.com/library/img.jpg?id=5fb2b42b2a0ab6222c2b65b7&w=1600",
      description:
        "Rugged, durable and built for superior long distance adventure touring and exploring beyond the pavement.",
      price: "16000",
      brand: "Yamaha",
    },
    {
      name: "YZ450F MONSTER ENERGY YAMAHA RACING EDITION",
      imgURL:
        "https://yamaha.scdn5.secure.raxcdn.com/library/img.jpg?id=5efcfd712a0ab73df85296c4&w=1600",
      description:
        "Race like the Yamaha factory team with your own Monster Energy‑inspired, class‑leading YZ450F.",
      price: "9500",
      brand: "Yamaha",
    },
    {
      name: "Scout Bobber",
      imgURL:
        "https://cdn1.polaris.com/globalassets/indian/2021/model/model-pages/scout-bobber/overview/gallery/modal/scout-bobber-04-modal-lg.jpg?v=84887de4&format=webp",
      description:
        "Stripped down and blacked-out with an aggressive stance and raw power, the Scout Bobber is a modern take on the iconic bobber style.",
      price: "11500",
      brand: "Indian",
    },
  ];

  await Product.insertMany(motorcycles);
  console.log("Created motorcycles!");
};
const run = async () => {
  await main();
  db.close();
};

run();
