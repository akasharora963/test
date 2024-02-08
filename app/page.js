"use client";
import { useState } from "react";
import AudioPlayer from "./audio";
import swal from "sweetalert";

export default function Home() {
  const [start, setStart] = useState(false);
  const [accepted, setAccepted] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {start && (
        <div className="flex-col space-y-8">
          <h1 className="text-3xl">My Awesome Tigress 🐯</h1>
          <p className="text-2xl">{"Will you go out with me :)"}</p>
          <div>
            <button
              onClick={() => {
                setAccepted(true);
                setStart(false);
              }}
              className="cursor-pointer text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4  focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Yes
            </button>
            <button
              onClick={() =>
                swal(
                  "Oops",
                  "I am Miggie's Creation , No is not an option",
                  "warning"
                )
              }
              className=" mx-10 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              No
            </button>
          </div>
        </div>
      )}

      <div className="z-10 max-w-5xl w-full  items-center justify-center mt-20 font-mono text-sm lg:flex">
        <div>
          {start && (
            <video autoPlay loop muted>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          )}
          {accepted && (
            <div className="flex-col space-y-8">
              <p className="text-2xl">Oo Yeahh....</p>
              <div
                className="tenor-gif-embed"
                data-postid="16214347"
                data-share-method="host"
                data-aspect-ratio="1"
                data-width="100%"
              ></div>{" "}
              <script
                type="text/javascript"
                async
                src="https://tenor.com/embed.js"
              ></script>
              <button
                onClick={() => {
                  window.location.reload();
                }}
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Go Back
              </button>
            </div>
          )}
          {!start && !accepted && (
            <button
              onClick={() => {
                setStart(true);
              }}
              className="w-48 h-12 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Lets Go Beautiful ...
            </button>
          )}
          {start && <AudioPlayer />}
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
