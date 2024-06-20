import HabilidadesMolecula from "../moleculas/HabilidadesMoleculas";
import { FaStar } from "react-icons/fa";
import { FcReadingEbook } from "react-icons/fc";
import Aprendiendo from "../moleculas/Aprendiendo";

const HabilidadesOrganismo = () => {
  return (
    <>
      <div className="flex  md:w-[40%]   mt-12 flex-col  ">
        <div className="flex flex-row gap-5 items-center  w-full justify-center md:justify-start ">
          <FaStar className="w-10 h-10 flex" />
          <h1 className="font-bebas  text-4xl">HABILIDADES</h1>
        </div>
        <div className="flex justify-start my-20">
          <HabilidadesMolecula />
        </div>
        <div className="flex items-center mt-10 gap-5 w-full  justify-center md:justify-start">
        <FcReadingEbook  className=" w-10 h-10 flex"/>
        <h1 className="font-bebas  text-4xl">APRENDIENDO</h1>
        </div>
        <div className="flex md:justify-start my-8  justify-center">
          <Aprendiendo />
        </div>
      </div>
    </>
  );
};
export default HabilidadesOrganismo;
