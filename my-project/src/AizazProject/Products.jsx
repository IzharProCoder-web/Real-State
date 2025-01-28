
const Products = () => {
  const ProductData = [
    {
      img: "/img/Product-1.svg", // Replace with your actual image paths
      heading: "COD Jerky Treats",
      text: "Delicious and protein-packed cod jerky, perfect for training or rewarding your pup. A natural treat that's low in fat and high in essential nutrients. This is some extra text to demonstrate text wrapping.",
      price: "$12.99",
      button: "Add to Cart",
    },
    {
      img: "/img/Product-2.svg",
      heading: "Whole Herring Treats",
      text: "100% dried herring treats, providing a crunchy and flavorful snack. Packed with Omega-3s for joint, brain, and coat health. Ideal for dogs of all sizes.",
      price: "$14.99",
      button: "Add to Cart",
    },
    {
      img: "/img/Product-3.svg",
      heading: "Salmon Jerky Treats",
      text: "Premium salmon jerky packed with rich flavor and essential fatty acids. Supports healthy skin, shiny coats, and overall wellness for your furry companion.",
      price: "$16.99",
      button: "Add to Cart",
    },
    // Add more products here...
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProductData.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative pt-[75%] sm:pt-[56.25%] md:pt-[66.67%] lg:pt-[75%]"> {/* Added responsive padding-top */}
              <img
                src={product.img}
                alt={product.heading} // Added alt text
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{product.heading}</h2>
              <p className="text-gray-700 mb-4 h-[75px] overflow-hidden text-ellipsis">{product.text}</p> {/* Added text-ellipsis */}
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold">{product.price}</p>
                <button className="bg-navy-700 hover:bg-navy-900 text-white font-bold py-2 px-4 rounded"> 
                  {product.button} 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;