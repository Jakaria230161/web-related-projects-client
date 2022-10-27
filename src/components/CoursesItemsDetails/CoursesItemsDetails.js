import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

export default function CoursesItemsDetails() {
  const item = useLoaderData();
  const { image_url, title, details , category_id, price,published_date} = item;
  console.log(item);
  const ref = React.createRef();

  return (
    <div className="m-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-96 h-96" src={image_url} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
           <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}><span className="btn btn-outline btn-secondary">Download Pdf</span></button>}
      </Pdf>
          <p ref={ref}>
            <p>Categories id : {category_id}</p>
            <p>Price : {price}</p>
            <p>Details : {details}</p>
            <p>Published date: {published_date}</p>
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-active btn-ghost">Purchase</button>
            <Link to={`/course/${item._id}/checkout`}><span className="btn btn-outline btn-primary">Get Premium</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
