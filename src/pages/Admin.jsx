import { useEffect, useState } from "react";
import Loader from "../components/ui/Loader";

function Admin() {

  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);


  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
  });



  useEffect(() => {
    fetchProducts();
  }, []);



  const fetchProducts = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/products`
    );

    const data = await response.json();

    console.log(data);

    if (Array.isArray(data)) {
      setProducts(data);
    } else {
      console.error("Expected an array, got:", data);
      setProducts([]);
    }
  } catch (error) {
    console.log(error);
    setProducts([]);
  }
};


  const handleChange = (e) => {

    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });

  };




  const generateDescription = async () => {
   

    if(!product.title.trim()){

      alert("Please enter product title first.");
      return;

    }
    setProduct((prev) => ({
  ...prev,
  description: "",
}));


    try {

      setAiLoading(true);


      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/ai/generate`,
        {
          method:"POST",

          headers:{
            "Content-Type":"application/json",
          },

          body:JSON.stringify({

            title: product.title

          }),

        }
      );


      const data = await response.json();


      console.log("AI Response:", data);



      if(!response.ok){

        throw new Error(
          data.message || "AI generation failed"
        );

      }



      setProduct((prev)=>({

        ...prev,

        description:
          data.description || ""

      }));



    }
    catch(error){

      console.log(error);

      alert(error.message);

    }
    finally{

      setAiLoading(false);

    }

  };





  const handleSubmit = async(e)=>{

    e.preventDefault();


    try{
      if (!product.title.trim()) {
  alert("Product title is required.");
  return;
}

if (!product.description.trim()) {
  alert("Description is required.");
  return;
}

if (Number(product.price) <= 0) {
  alert("Price must be greater than 0.");
  return;
}
        
      setLoading(true);


      let response;


      if(editingId){

        response = await fetch(

          `${import.meta.env.VITE_API_URL}/api/products/${editingId}`,

          {

            method:"PUT",

            headers:{
              "Content-Type":"application/json",
            },

            body:JSON.stringify(product),

          }

        );


      }
      else{


        response = await fetch(

          `${import.meta.env.VITE_API_URL}/api/products`,

          {

            method:"POST",

            headers:{
              "Content-Type":"application/json",
            },

            body:JSON.stringify(product),

          }

        );

      }



      if(response.ok){


        alert(
          editingId
          ? "Product updated successfully"
          : "Product added successfully"
        );



        setProduct({

          title:"",
          description:"",
          image:"",
          price:"",

        });



        setEditingId(null);

        fetchProducts();

      }



    }
    catch(error){

      console.log(error);

    }
    finally{

      setLoading(false);

    }

  };





 const handleDelete = async (id) => {
  if (!window.confirm("Delete this product?")) return;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/products/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete product");
    }

    alert("Product deleted successfully.");

    fetchProducts();
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};





  const handleEdit=(item)=>{


    setEditingId(item._id);


    setProduct({

      title:item.title,

      description:item.description,

      image:item.image,

      price:item.price,

    });


  };






  return(

    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">


      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">

        Admin Dashboard

      </h1>



      {loading && <Loader/>}



      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >



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

          rows="5"

          required

        />




        <button

          type="button"

          onClick={generateDescription}

          disabled={aiLoading || !product.title.trim()}

          className={`px-4 py-2 rounded text-white transition-colors ${
  aiLoading || !product.title.trim()
    ? "bg-gray-400 cursor-not-allowed"
    : "bg-purple-700 hover:bg-purple-800"
}`}
        >

          {
            aiLoading
            ? "Generating..."
            : "Generate Description with AI"
          }


        </button>




        {

          aiLoading && (

            <div className="flex flex-col items-center">

              <p className="text-green-700">

                Generating description...

              </p>

              <Loader/>

            </div>

          )

        }





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

          className="bg-green-700 text-white px-6 py-3 rounded"

        >

          {
            editingId
            ? "Update Product"
            : "Add Product"
          }


        </button>



      </form>




      <div className="mt-12">

        <h2 className="text-2xl font-bold mb-6 text-green-700">

          Manage Products

        </h2>



        {
          products.length===0

          ?

          <p>No products found.</p>


          :

          products.map((item)=>(


            <div
              key={item._id}
              className="flex justify-between border p-4 mb-4 rounded"
            >

              <div>

                <h3 className="font-bold">
                  {item.title}
                </h3>

                <p>
                  ₹{item.price}
                </p>

              </div>


              <div className="flex flex-wrap gap-2">

                <button

                  onClick={()=>handleEdit(item)}

                  className="bg-blue-600 text-white px-3 py-2 rounded mr-2"

                >
                  Edit
                </button>



                <button

                  onClick={()=>handleDelete(item._id)}

                  className="bg-red-600 text-white px-3 py-2 rounded"

                >
                  Delete
                </button>


              </div>


            </div>


          ))

        }


      </div>


    </div>

  );

}

export default Admin;