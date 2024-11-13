"use client";
import React, { useEffect, useState } from "react";
import "../Styles/Card.css";
import { Rating } from "react-simple-star-rating";
import { useDispatch } from "react-redux";
import { AddTodo } from "../reduxx/slicer";
const MainCarditem: React.FC = () => {
  const [card, setcard] = useState<CartItem[]>([]);
  // redux
  const dispatch = useDispatch();
  useEffect(() => {
    const cartFetching = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const data2 = await data.json();
      setcard(data2);
    };
    cartFetching();
  }, []);

  const Addedd = (elem:CartItem) => {
    dispatch(AddTodo(elem));
  };

  return (
    <div className="card-container">
      {card.map((elem) => (
        <div className="card" key={elem.id}>
          <h1 className="card-title">Name: {elem.category}</h1>
          <img className="card-image" src={elem.image} alt={elem.category} />
          <Rating initialValue={elem.rating.rate} />
          <h2 className="card-description">{elem.title}</h2>
          <button onClick={() => Addedd(elem)} className="card-button">
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default MainCarditem;
