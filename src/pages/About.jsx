import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/images/ruth.jpeg";

function About() {
  return (
    <div className="relative min-h-screen w-full">
      <img
        src={background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-red-900/40 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-red-400 drop-shadow-lg">
          Welcome to <span className="text-white">Movix</span> 🎬
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
          Movix is not just another movie website — it’s your cinematic universe.
          A space where stories come alive, characters become friends, and every movie
          night feels like a journey. Whether you crave heart-racing action, tear-dropping romance,
          or mind-bending sci-fi worlds — we're here to guide you there.
        </p>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
          We believe movies are more than entertainment — they are memory makers,
          emotion shapers, and sometimes the escape we all need.
          So relax… dim the lights… grab your popcorn…
          <span className="text-red-400 font-semibold"> and let Movix take you somewhere unforgettable.</span>
        </p>

        <div className="mt-10">
          <Link
            to="/"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition shadow-lg"
          >
            Explore Movies 🎥
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
