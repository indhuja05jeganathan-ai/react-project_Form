import React, { useState } from "react";
import "./shop.css";
import img1 from "../assets/sleep.jpg";

<img src={img1} />

export default function ShopCategory() {
  const [selected, setSelected] = useState("");git config --global core.autocrlf true

  const categories = [
    
  { name: "SWEET SLEEP", img: img1 },   // ✅ local image
  { name: "IMMUNITY DEFENSE", img: "https://picsum.photos/300?1" },
  { name: "BEAUTY FROM WITHIN", img: "https://picsum.photos/300?2" },
  { name: "MOOD SUPPORT", img: "https://picsum.photos/300?3" },
];


  // Event handler
  const handleClick = (category) => {
    setSelected(category);
  };

  return (
    <div>
      <h1 className="title">Shop by Category</h1>

      <div className="card-container">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`card ${selected === item.name ? "active" : ""}`}
            onClick={() => handleClick(item.name)}
          >
            <img src={item.img} alt="" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      {/* Show selected category */}
      {selected && (
        <h2 style={{ textAlign: "center" }}>
          You selected: {selected}
        </h2>
      )}
    </div>
  );
}