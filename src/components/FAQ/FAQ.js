import React from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function FAQ() {
  const notify = () => toast("Thank You so much!");
  return (
    <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 dark:text-gray-400">These Questions are very very common in the Interview. That's why we have to know as well.</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 text-orange-600 text-2xl font-bold py-6 focus:outline-none focus-visible:ring-violet-400"> What is cors?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">CORS is a node. js package for providing a Connect/Express middleware that can be used to enable CORS with various options.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-green-600 text-2xl font-bold ">Why are you using firebase? What other options do you have to implement authentication?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.Firebase completely freed our engineers from managing campaign infrastructure, and helped our team to be more effective and our campaigns to perform better—which is a huge win for us.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-purple-600 text-2xl font-bold ">How does the private route work?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-purple-600 text-2xl font-bold ">What is Node? How does Node work?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node.</p>
			</details>
		</div>
	</div>
            </section>
             <button onClick={notify}><span className='text-xl bg-blue-600 font-semibold text-white py-2 border rounded-lg px-4'>Click Me</span></button>
        <ToastContainer />
        </div>
  );
}
