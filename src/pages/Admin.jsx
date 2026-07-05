import { useEffect, useState } from "react";



import Loader from "../components/ui/Loader";

function Admin() {
  const [products, setProducts] = useState([]);
const [editingId, setEditingId] = useState(null);
useEffect(() => {
  fetchProducts();
}, []);

const fetchProducts = async () => {
  const response = await fetch("http://localhost:5000/api/products");
  const data = await response.json();
  setProducts(data);
};
    const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  let response;

  if (editingId) {
    response = await fetch(
      `http://localhost:5000/api/products/${editingId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );
  } else {
    response = await fetch(
      "http://localhost:5000/api/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );
  }

  if (response.ok) {
    alert(
      editingId
        ? "Product updated successfully!"
        : "Product added successfully!"
    );

    setProduct({
      title: "",
      description: "",
      image: "",
      price: "",
    });

    setEditingId(null);

    fetchProducts();
  }
};
const handleDelete = async (id) => {
  if (!window.confirm("Delete this product?")) return;

  await fetch(`http://localhost:5000/api/products/${id}`, {
    method: "DELETE",
  });

  fetchProducts();
};
const handleEdit = (product) => {
  setEditingId(product._id);

  setProduct({
    title: product.title,
    description: product.description,
    image: product.image,
    price: product.price,
  });
};
  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
        Admin Dashboard
      </h1>
      {loading ? (
  <Loader />
) : (
  <form onSubmit={handleSubmit} className="space-y-4">
    {/* your form */}
  </form>
)}

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={product.title}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800"
        >
           {editingId ? "Update Product" : "Add Product"}
        </button>

      </form>
      <div className="mt-12">
  <h2 className="text-2xl font-bold mb-6 text-green-700">
    Manage Products
  </h2>

  <div className="space-y-4">
    {products.map((item) => (
      <div
        key={item._id}
        className="flex justify-between items-center border rounded-lg p-4 shadow"
      >
        <div>
          <h3 className="font-bold">{item.title}</h3>
          <p>₹{item.price}</p>
        </div>

        <div className="space-x-3">
          <button
            onClick={() => handleEdit(item)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Edit
          </button>

          <button
            onClick={() => handleDelete(item._id)}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}

export default Admin;