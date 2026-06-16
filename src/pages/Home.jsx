import Hero from "../components/Hero";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <Hero />

      {/* About Section */}
      <section className="py-12 px-8 text-center">
        <h2 className="text-3xl font-bold text-green-800">
          Welcome to HimShakti
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          HimShakti is a food processing company that empowers local producers, promotes rural entrepreneurship, and delivers authentic food products directly to customers.
        </p>
      </section>

      {/* Featured Products */}
      <section className="px-8 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Organic Honey"
            description="Pure and natural honey sourced from local farms."
            image="https://images.unsplash.com/photo-1587049633312-d628ae50a8ae"
          />

          <Card
            title="Millet Cookies"
            description="Healthy and delicious millet-based snacks."
            image="https://images.unsplash.com/photo-1499636136210-6f4ee915583e"
          />

          <Card
            title="Traditional Pickles"
            description="Homemade pickles prepared using authentic recipes."
            image="https://images.unsplash.com/photo-1604908177522-f7c4f4d0c9cf"
          />
        </div>
      </section>

      {/* Benefits Section . Tells users why trust Himshakti*/}
<section className="py-16 px-8 bg-green-50">
  <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
    Why Choose HimShakti?
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <h3 className="text-xl font-semibold text-green-700 mb-3">
        Fresh & Natural Products
      </h3>
      <p className="text-gray-600">
        Get high-quality food products made from natural ingredients sourced
        directly from rural communities.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <h3 className="text-xl font-semibold text-green-700 mb-3">
        Support Rural Entrepreneurs
      </h3>
      <p className="text-gray-600">
        Every purchase helps local farmers, self-help groups, and small
        businesses grow and become financially independent.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <h3 className="text-xl font-semibold text-green-700 mb-3">
        Direct From Source
      </h3>
      <p className="text-gray-600">
        We connect producers directly with customers, ensuring fair prices,
        better quality, and authentic products.
      </p>
    </div>
  </div>
</section>