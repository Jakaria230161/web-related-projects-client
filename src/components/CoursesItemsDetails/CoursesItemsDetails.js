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
          <p><span className="text-blue-500 font-bold text-3xl">Introduction : </span>
            JavaScript is a free scripting language that works on client-side as well as server-side. It is text-based and works along-side HTML and CSS to enhance code functionality and add interactive elements. In short, JS can bring life to otherwise boring and static web pages. JS is interpreted, which means the code need not be compiled. For huge projects that use a lot of interactive content, separate JavaScript files with the extension .js are created. However, JS can also be embedded in HTML code using script tag. Some common use-cases of JS are interactive maps, live news updates, form validations, creating landing pages, etc.</p>
          <p><span className="text-orange-500 text-3xl font-bold">Advantages of JavaScript : </span>
            <p>JavaScript completely changed the way the world looked at browsers. It gave the ability to build complex websites and make the whole business process digital! Some advantages of JavaScript are:</p>
            <div className="text-justify">
              <li>High performance: JS is lightweight & fast as it can be immediately run on the browser (client machine)</li>
<li>High performance: JS is lightweight & fast as it can be immediately run on the browser (client machine)</li>
<li>Interoperable: can be used with a variety of other languages and applications</li>
<li>Interoperable: can be used with a variety of other languages and applications</li>
<li>Makes pages lively, dynamic, and rich</li>
<li>It comes with many free tools to enhance functionality</li>
<li>The functionality of JS can be extended to the backend using Node.js</li>
</div>
          </p>
          <p><span className="text-3xl font-bold text-cyan-400">Prerequisites: </span>
To learn JavaScript, you must know the basics of HTML and CSS, both of which are extremely easy to learn. For a working knowledge of JavaScript and most web-based projects, this knowledge will be sufficient. For more advanced projects and skills, it is recommended to know basic OOP concepts and an OOP based programming language (like Java).
            You can install an IDE or use code editors, or even use notepad or Textpad to write JS code. IDEs and editors provide intuitive programming experience and faster results than programming with editors like notepad, where you have to type everything from scratch.</p>
         <p><span className="text-3xl font-bold text-red-600">How To Learn JavaScript Summary: </span>
JavaScript is the king of web applications, and you have to keep practicing and be ready to face new challenges. There might be days when you won’t understand the exact issue and have to debug a lot, but eventually, you will get there. Any UI-based programming language, for that matter, requires patience and consistent practice.

            <div className="text-justify">
              <li>JS is used for client as well as server-side programming and is an interpreted language, which means no additional compiler is required
              <li>You can simply type JS code inside any HTML file using the script tag and make it work by opening it in a browser</li>
            </li>

            <li>To learn JS, you should also learn HTML and CSS
              <li>JavaScript uses the DOM API to manipulate the HTML and CSS on a web page</li>
              <li>Learn through courses, tutorials, projects, and then take up certifications to test your knowledge and learn industry-level skills too.</li>
            </li>
<li>
Interview questions will help you understand the latest industry requirements
              Practice is the key to learning JS</li></div>
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
            <Link to={`/course/${item._id}/checkout`}>CheckOut</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
