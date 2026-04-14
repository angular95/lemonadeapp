
import React, { useEffect, useState } from 'react';
import './App.css';
import LemonadeTable from './Lemonade';
import OrderTable from './OrderTable';
import Modal from './Modal';
function App() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
 const handleSubmit = (e) => {
  e.preventDefault();

  // Validation: name required, and at least one of email/phone required
  if ( totalAmount === 0) {
    alert("Total amount is required");
    return;
  }
  if (!formData.name ){
    alert("Name is required");
    return;
  }
  if (formData.email || formData.phone) {
     console.log("Form Data:", formData);
    const formdataWithTotal = { ...formData, orderAmount: totalAmount };

      
     fetch("https://localhost:7209/api/OrderDetail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formdataWithTotal)
    })
    .then(response => {     
        alert("Order placed successfully!");
        setFormData({ name: "", email: "", phone: "" });
      
    })
    .catch(error => {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }); 

     setShowModal(false);
  }else {
    alert("Please provide at least an email or phone number");
  }

};


    return (
      <div className='container'>
        <h1 style={{ width: "100%" }}>Lemonade Stand</h1>
        <div className='tableContainer'>
          <div style={{ width: "70%", textAlign: "center", paddingLeft: "10%" }}>
            <LemonadeTable setTotalAmount={setTotalAmount} />
          </div>
          <div style={{ width: "30%", textAlign: "center", marginTop: "30px" }}>
            <OrderTable totalAmount={totalAmount} setShowModal={setShowModal} />
          </div>
        </div>

        {showModal && (
           <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>Enter Your Details</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
           
            />
          </div>
          <div>
            <label>Phone:</label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
            
            />
          </div>
          <button type="submit">Submit</button>
        </form>
          </Modal>

        )}

      </div>
    );
  
}
  export default App;
