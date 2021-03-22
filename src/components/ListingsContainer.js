import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({listing}) {

const craiglist= listing.map((list) => {
return <ListingCard key= {list.id} description={list.description} image ={list.image} location ={list.location}/>

})


  return (
    <main>
      <ul className="cards">
        {craiglist}
      </ul>
    </main>
  );
}

export default ListingsContainer;
