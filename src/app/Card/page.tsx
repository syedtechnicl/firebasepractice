"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reduxx/store";
import { Rating } from "react-simple-star-rating";
import { RemoveTodo } from "../reduxx/slicer";

interface CartItem {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

const page = () => {
  const dd = useSelector((state: RootState) => state.Cardall);
  const dispatch = useDispatch();
  const remove = (elem: CartItem) => {
    dispatch(RemoveTodo(elem.id));
  };

  return (
    <div>
      {dd.length > 0
        ? dd.map((elem: CartItem) => (
            <div className="card" key={elem.id}>
              <h1 className="card-title">Name: {elem.category}</h1>
              <img
                className="card-image"
                src={elem.image}
                alt={elem.category}
              />
              <Rating initialValue={elem.rating.rate} />
              <h2 className="card-description">{elem.title}</h2>
              <button onClick={() => remove(elem)} className="card-button">
                Delete To Cart
              </button>
            </div>
          ))
        : "Empty Card"}
    </div>
  );
};

export default page;
