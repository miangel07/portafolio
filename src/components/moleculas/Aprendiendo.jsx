import Habilidades from "../atomos/Habilidades";
import { SiTypescript } from "react-icons/si";

const Aprendiendo = () => {
  return (
    <>
      <div className=" justify-center items-center  flex-wrap gap-3 flex">
        <Habilidades
          className={
            "w-32 h-12 justify-center rounded-lg  bg-slate-300 items-center flex flex-row"
          }
        >
          <div className=" font-roboto text-base flex flex-row gap-2 items-center justify-center">
            <SiTypescript className="w-6 h-6 bg-white text-blue-600" />
            TypeScript
          </div>
        </Habilidades>
      </div>
    </>
  );
};
export default Aprendiendo;
