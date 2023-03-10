import { CodeIcon } from "@heroicons/react/solid";
import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects I've Built
          </h1>

          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some of Self-Made Projects . I Hope You'll like them
          </p>
        </div>

        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 inline">
          <div className="rounded overflow-hidden shadow-lg cursor-pointer">
            <img
              className="object-cover"
              alt="imaget"
              src="./journey_details.png"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">
                MERN Stack Booking Application
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <a href="https://github.com/kaustubh0777/booking_reservation">
                View
              </a>
            </button>
          </div>

          <div className="rounded overflow-hidden shadow-lg cursor-pointer">
            <img className="w-64 h-64 ml-10" src="./chaticon.png" alt="Mountain" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">
                Real-Time Chat Application
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3">
              <a href="https://github.com/kaustubh0777/chat_application">
                View
              </a>
            </button>
          </div>

          <div className="rounded overflow-hidden shadow-lg cursor-pointer">
            <img
              className="object-cover w-full h-50"
              src="./textutils.png"
              alt="Mountain"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">Text Utils</div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <a href="https://cute-semolina-90e681.netlify.app/">View</a>
            </button>
          </div>

          <div className="rounded overflow-hidden shadow-lg cursor-pointer">
            <img
              className="w-full h-64"
              src="./wiki.avif"
              alt="Mountain"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">JustWiki</div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <a href="https://github.com/kaustubh0777/JustWiki">View</a>
            </button>
          </div>

          <div className="rounded overflow-hidden shadow-lg cursor-pointer">
            <img
              className="w-full h-64 object-cover"
              src="./news.png"
              alt="Mountain"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">News App</div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <a href="https://github.com/kaustubh0777/news_app">View</a>
            </button>
          </div>

          <div className="rounded overflow-hidden shadow-lg cursor-pointer">
            <img className="w-full h-64" src="./todo.avif" alt="Mountain" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">Todo App </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <a href="https://infallible-nightingale-2dd5fa.netlify.app/">
                View
              </a>
            </button>
          </div>

          <div className="rounded overflow-hidden shadow-lg cursor-pointer">
            <img className="w-full h-64" src="./sudoku.jpg" alt="Mountain" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">Sudoku Game </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <a href="https://github.com/kaustubh0777/Sudoku_Game">View</a>
            </button>
          </div>

          <div className="rounded overflow-hidden shadow-lg cursor-pointer">
            <img className="w-full h-64" src="./ai.png" alt="Mountain" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">
                Face Recognition
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <a href="https://github.com/kaustubh0777/face_recognition">
                View
              </a>
            </button>
          </div>
          <div className="rounded overflow-hidden shadow-lg cursor-pointer">
            <img className="w-full h-64" src="./finance.jpg" alt="Mountain" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white text-left">
                Finance Chatbot using Rasa Framework
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-12 rounded">
                <a href="https://github.com/kaustubh0777/rasa_chatbot">View</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
