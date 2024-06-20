import Foto from "../atomos/Avatar";
import AnimacionNombre from "../atomos/Animacion";

const InfoPersonal = () => {
  return (
    <div className="flex flex-col md:flex-row h-56 place-items-center gap-4 mt-16 ">
      <div className="flex justify-center items-center  h-40 md:relative">
        <Foto/>
      </div>
      <div className="flex  justify-center items-center my-5 h-full">
        <AnimacionNombre />
      </div>
    </div>
  );
};

export default InfoPersonal;

