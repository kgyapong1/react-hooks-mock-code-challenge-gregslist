import React, {useState} from "react";

function ListingCard({name,description, image, location}) {
  const [isOn, setIsOn] = useState(false);
  
  function handleClick(){
    setIsOn(!isOn)
  }
  function againHandleClick(){
    setIsOn(!isOn)
  }
  return (
  
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={name} />
      </div>
      <div className="details">
        {isOn ? (
          <button onClick={handleClick}className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={againHandleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );

}
export default ListingCard;
