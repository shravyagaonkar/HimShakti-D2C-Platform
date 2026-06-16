function Card({ title, description, image }) {
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

        <button
          onClick={() =>
            window.open(
              `https://wa.me/7671819095?text=Hi,%20I%20would%20like%20to%20order%20${title}`,
              "_blank"
            )
          }
          className="mt-4 px-4 py-2 bg-green-700 text-white rounded"
        >
          Order via WhatsApp
        </button>
      </div>
    </div>
  );
}

export default Card;