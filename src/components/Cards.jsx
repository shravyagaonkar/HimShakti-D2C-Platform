function Card({ title, description, image, price }) {
  return (
    <div className="border rounded-xl shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <p className="text-gray-600 mt-2">
          {description}
        </p>
        <p className="mt-3 text-lg font-semibold text-green-700">
          ₹{price}
        </p>

        <button
          onClick={() => alert("WhatsApp ordering coming soon!")}
          className="mt-4 px-4 py-2 bg-green-700 text-white rounded"
        >
        Order via WhatsApp
        </button>
      </div>
    </div>
  );
}

export default Card;