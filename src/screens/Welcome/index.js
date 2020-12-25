import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/35104-chat-oder.json";
import "./styles.css";

export default function Welcome() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="grid wrap-4 container px-16 mx-auto flex content-center contenedor md:grid-cols-2">
      <div className="animacion box-border md:p-6 lg:p-16 md:block hidden">
        <Lottie options={defaultOptions} />
      </div>

      <div className="place-self-center">
        <div className="shadow-inner border-4 p-4">
          <div className="mb-4">
            <p className="text-5xl md:text-7x1 lg:text-9x1 text-red-600 font-black inline">
              Bmt
            </p>
            <p className="text-5xl md:text-7x1 lg:text-9x1 text-blue-600 font-black inline">
              Chat
            </p>
          </div>
          <p className="text-2xl md:text-3x1 mb-6 mx-2 text-gray-600">
            Un chat en tiempo real, privado, seguro y gratuito.
          </p>
          <div className="grid md:grid-cols-2 wrap-4">
            <button className="border border-indigo-500 bg-blue-500 text-white rounded-md py-3 lg:py-4 m-2 transition duration-500 ease select-none hover:bg-blue-700 focus:outline-none focus:shadow-outline">
              Ingresar
            </button>
            <button className="border border-red-500 bg-red-500 text-white rounded-md py-3 lg:py-4 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
