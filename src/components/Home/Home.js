import React from "react";
import { Link } from "react-router-dom";
import Blog from "../Blog/Blog";
import FAQ from "../FAQ/FAQ";

export default function Home() {
  return (
    <>
      <section className="bg-gray-800 text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Welcome to
				<span className="dark:text-violet-400">WebConcepts</span>let's start...
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">“Develop a passion for learning. If you do, you will never cease to grow.” 
              <br />
              here i give you some tutorials
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link rel="noopener noreferrer" to="/courese" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Enter to Courses</Link>
				<Link rel="noopener noreferrer" to="/blog" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Read Blog</Link>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=740&t=st=1666808675~exp=1666809275~hmac=04ec590e1e0f437d0eccc187ca4b572f7d1901ad6d3ba91667de25d0d766685e" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
      <FAQ></FAQ>
      <Blog></Blog>
    </>
  );
}
