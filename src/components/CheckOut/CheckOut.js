import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../context/UserContext";

export default function CheckOut() {
  const item = useLoaderData();
  const { user,email, photoURL } = useContext(authContext);
  const { image_url, title } = item;
  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* <!-- Image gallery --> */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <img
              src={image_url}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* <!-- Product info --> */}
        <div>
          <div>
            {/* <!-- Description and details --> */}
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {title}
            </h1>
            <div className="border rounded-lg my-8 mx-6">
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  The Basic Tee 6-Pack allows you to fully express your vibrant
                  personality with three grayscale options. Feeling adventurous?
                  Put on a heather gray tee. Want to be a trendsetter? Try our
                  exclusive colorway: &quot;Black&quot;. Need to add an extra
                  pop of color to your outfit? Our white tee has you covered.
                </p>
              </div>
            </div>
            <div className="border rounded-lg my-8 mx-6">
              <h3 className="font-bold text-2xl">Name: {user.displayName}</h3>
              <h4 className="font-semibold">Email : {user.email}</h4>
              <div className="avatar">
  <div className="w-24 mt-6 mb-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={user.photoURL} alt='' />
  </div>
</div>
            </div>

            <div className=" border rounded-lg my-8 mx-6">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  The 6-Pack includes two black, two white, and two heather gray
                  Basic Tees. Sign up for our subscription service and be the
                  first to get new, exciting colors, like our upcoming
                  &quot;Charcoal Gray&quot; limited release.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
