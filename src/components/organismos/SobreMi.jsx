import Descripcion from "../moleculas/Descripcion";
import InfoPersonal from "../moleculas/InfoPersonal";
import Social from "../moleculas/Social";
import Menu from "./Navbar"; 

const SobreMi = () => {
  return (
    <>
      <div className="fixed flex z-20">
      <Menu /> 
      </div>

      <div className=" mt-24 justify-center items-center md:w-[40%] ">
        <InfoPersonal />

        <div className="flex justify-start mt-12">
          <Descripcion />
        </div>
      </div>
    </>
  );
};
export default SobreMi;
