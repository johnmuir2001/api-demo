import React, { useState, useEffect } from "react";
import Modal from "./Modal"
import './App.css'

const App = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({})
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setErrorMsg('')
        const response = await fetch('https://fakestoreapi.com/products');
        
        if(!response.ok){
          throw new Error(response.statusText)
        }

        const data = await response.json();
        setProducts(data)
        setLoading(false)
      } catch (error) {
        setErrorMsg("Oops something went wrong...")
        console.log(error.message)
      }
    }
    fetchData()
  }, [])

  const handleClick = (shopItem) => {
    setSelectedProduct(shopItem);
    setShowModal(true);
  }

  if(errorMsg !== ''){
    return <h1>{errorMsg}</h1>
  }

  return (
    <div className="pageWrapper">
      <h1>My Cool Shop</h1>
      <code>API endpoint: "https://fakestoreapi.com/products"</code>

      {/* map through data from API that is stored in the state */}
      <div className="imageWrapper">
        {loading && (
          <h2>Loading...</h2>
        )}
        {products.map((item, index) => {
          return (
            <img key={index} src={item.image} alt="item of clothing" onClick={() => handleClick(item)}/>
          )
        })}
      </div>
      
      {showModal && <Modal closeModal={setShowModal} product={selectedProduct}/>}
    </div>
  );
}

export default App;