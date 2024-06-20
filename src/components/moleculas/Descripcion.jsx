import { useState } from "react";
import { CgMail } from "react-icons/cg";
import { IoCopyOutline } from "react-icons/io5";
import { TbFileCv } from "react-icons/tb";
import { GrStatusGood } from "react-icons/gr";
import Correo from "../atomos/Code";
import pdf from "../../../public/cv.pdf";

const Descripcion = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyText = () => {
    navigator.clipboard
      .writeText("miguelosoriorojas063@gmail.com")
      .then(() => setCopySuccess(true));
  };

  return (
    <>
      <div className="flex flex-wrap flex-col ">
        <div className="w-full flex  flex-col">
          <span className="text-gray-400 flex">
            Soy un desarrollador Front-End,
          </span>
          <span className="text-pink-300 flex">
            apasionado por la programación, me gusta aprender y aplicar lo
            aprendido.
          </span>
        </div>

        <div className="flex justify-center mt-12 flex-row gap-3 items-center flex-wrap  w-full lg:justify-stretch ">
          <CgMail className="text-5xl" />
          <div className="flex">
            <Correo>
              <span className="">miguelosoriorojas063@gmail.com</span>
            </Correo>
              </div>
            <div className="flex ">
            <IoCopyOutline
              onClick={copyText}
              className={`text-3xl flex cursor-pointer ml-2  ${
                copySuccess ? "text-green-500" : ""
              }`}
            />

            {copySuccess && <GrStatusGood className="ml-2 text-green-500" />}
            </div>
        </div>
        {
          <div className="mt-20 flex flex-row items-center justify-center  md:justify-start  ">
            <a href={pdf} target="_blank">
              <TbFileCv className="text-5xl cursor-pointer hover:text-slate-400 " />
            </a>

            <p className="font-bebas text-4xl ">HOJA DE VIDA</p>
          </div>
        }
      </div>
    </>
  );
};

export default Descripcion;