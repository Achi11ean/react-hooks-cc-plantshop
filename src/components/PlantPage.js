import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants ] = useState ([])
  const [searchTerm, setSearchTerm] = useState(""); 
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((response) => response.json())
    .then((plants) => setPlants(plants)) 
  }, [])

   function handleSearchChange(newSearchTerm) {
    setSearchTerm(newSearchTerm);
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} onAddPlant={(data)=>console.log(data)}/>
      <Search onSearchChange={handleSearchChange}/>
      <PlantList plants={filteredPlants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
