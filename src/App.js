import { useState, useEffect } from "react";
import './App.css';
// import AnimalModal from "./AnimalModal";

const App = () => {
    // const [allAnimals, setAllAnimals] = useState([]);
    // const [currentAnimal, setCurrentAnimal] = useState({});
    // const [showModal, setShowModal] = useState(false);
    const [showError, setShowError] = useState("");

    useEffect(() => {
      const fetchAnimals = async () => {
        try {
          const response = await fetch("https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles", {
            method: "POST",
            headers: {
              "x-api-key": "PYfVzyOY6i1xzixnh60rI6aVO0XMrn4Gaa2uYecx",
              "Content-Type": "application/json"
            },
            body: {
              "registrationNumber": "TE57VRN"
            }
          });
          if(!response.ok){
            throw new Error(response.statusText)
          }
          const data = await response.json()
          console.log(data)
          // setAllAnimals(data)
        } catch (err) {
          setShowError(err.message)
        }
        
      }
      fetchAnimals()
    }, []);

    // const handleClick = (animalObj) => {
    //   setCurrentAnimal(animalObj);
    //   setShowModal(true)
    // }

  return (
    <div className="App">
      <h1>Animal Encyclopedia</h1>
      <h2>{showError}</h2>
      {/* <div className="animalWrap">
        {allAnimals.map((animal, index) => {
          return <img key={index} src={animal.image_link} alt={`${animal.name}`} onClick={() => handleClick(animal)}/>
        })}
      </div>
      {showModal && <AnimalModal closeModal={setShowModal} animal={currentAnimal}/>} */}
    </div>
  );
}

export default App;