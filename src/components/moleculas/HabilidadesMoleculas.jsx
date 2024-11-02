import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import Habilidades from "../atomos/Habilidades";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiLaravel } from "react-icons/si";

const HabilidadesMolecula = () => {
  return (
    <>
      <div className=" justify-center items-center  flex-wrap gap-3 flex">
        <Habilidades
          className={
            "w-32 h-12 justify-center rounded-lg  bg-slate-300 items-center flex flex-row"
          }
        >
          <div className=" font-roboto text-base flex flex-row gap-2 items-center justify-center">
            <IoLogoJavascript className="text-yellow-300 bg-black w-6 h-6" />{" "}
            JavaScript
          </div>
        </Habilidades>

        <Habilidades
          className={
            "w-32 h-12 justify-center rounded-lg  bg-slate-300 items-center flex flex-row"
          }
        >
          <div className="font-roboto text-base flex flex-row items-center gap-1 justify-center">
            <RiReactjsLine className="w-5 h-5 mr-2 text-blue-600" />
            React
          </div>
        </Habilidades>

        <Habilidades
          className={
            "w-32 h-12 justify-center rounded-lg  bg-slate-300 items-center flex flex-row"
          }
        >
          <div className="font-roboto text-base flex flex-row items-center gap-1 justify-center">
            <div className="font-roboto text-base flex flex-row items-center gap-1 justify-center">
              <RiTailwindCssFill className="w-5 h-5 mr-2 text-blue-500" />
              Tailwind 
            </div>
          </div>
        </Habilidades>
        <Habilidades
          className={
            "w-32 h-12 justify-center rounded-lg  bg-slate-300 items-center flex flex-row"
          }
        >
          <div className="font-roboto text-base flex flex-row items-center gap-1 justify-center">
            <div className="font-roboto text-base flex flex-row items-center gap-1 justify-center">
              <SiNextdotjs className="w-5 h-5 mr-2 " />
              Next.js 
            </div>
          </div>
        </Habilidades>
        <Habilidades
          className={
            "w-32 h-12 justify-center rounded-lg  bg-slate-300 items-center flex flex-row"
          }
        >
          <div className="font-roboto text-base flex flex-row items-center gap-1 justify-center">
            <div className="font-roboto text-base flex flex-row items-center gap-1 justify-center">
            <FaGitAlt className="w-5 h-5 mr-2 text-red-500"  />
              Git
            </div>
          </div>
        </Habilidades>
        <Habilidades
          className={
            "w-32 h-12 justify-center rounded-lg  bg-slate-300 items-center flex flex-row"
          }
        >
          <div className="font-roboto text-base flex flex-row items-center gap-1 justify-center">
            <div className="font-roboto text-base flex flex-row items-center gap-1 justify-center">
            <SiLaravel   className="w-5 h-5 mr-2 text-red-500"  />
              laravel
            </div>
          </div>
        </Habilidades>
      </div>
    </>
  );
};
export default HabilidadesMolecula;
