import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listing, setListings]= useState([])
useEffect (
() => {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(listing => {
      setListings(listing)
    })
},[]
)




  return (
    <div className="app">
      <Header />
      <ListingsContainer listing={listing} />
    </div>
  );
}

export default App;
