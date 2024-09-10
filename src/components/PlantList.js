import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants}) {

  return (
    <ul className="cards">{plants.map((plant) => (
      <PlantCard
      key={plant.id}
      name={plant.name}
      image={plant.image}
      price={plant.price}
      inStock={plant.inStock}
      />))}
      </ul>
  );
}

export default PlantList;
