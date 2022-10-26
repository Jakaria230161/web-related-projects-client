import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function CoursesItemsDetails() {
  const item = useLoaderData();
  const { image_url, title } = item;
  return (
    <div className="m-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-96 h-96" src={image_url} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
            <Link to={`/course/${item._id}/checkout`}>CheckOut</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
