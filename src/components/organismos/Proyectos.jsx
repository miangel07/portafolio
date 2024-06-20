import CardProyect from "../moleculas/CardProyect";
import { BsRocketTakeoff } from "react-icons/bs";
import CrudProyect from "../moleculas/CrudProyect";

const Proyectos = () => {
  return (
    <>
      <div className="flex w-[40%]  mt-12">
        <div className="flex gap-5 justify-center flex-wrap w-full" >
          <BsRocketTakeoff className="w-10 h-10 text-yellow-900" />
          <h1 className="font-bebas  text-4xl">PROYECTOS</h1>

        <div className="mt-16 flex flex-wrap gap-3 w-full ">
          <CardProyect />

          <CrudProyect />

          <CrudProyect />
        </div>
        </div>
      </div>
    </>
  );
};

export default Proyectos;
