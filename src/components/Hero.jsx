import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <section className="bg-green-100  py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold leading-tight text-green-700">
          Bringing Rural Goodness to Every Doorstep
        </h1>

        <p className="mt-6 text-xl leading-8 text-gray-600">
          Discover handcrafted, organic, and naturally sourced products
          created by skilled rural entrepreneurs. HimShakti bridges the
          gap between local producers and customers, ensuring authenticity,
          quality, and sustainable livelihoods.
        </p>

        <p className="mt-4 text-lg text-gray-600 leading-7">
          From premium spices and pure honey to wholesome grains and
          herbal products, every purchase supports rural communities
          while bringing healthy, traditional products directly to your home.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          onClick={() => navigate("/products")}>
            Explore Products
          </button>

        </div>
      </div>
    </section>
  );
}

export default Hero;