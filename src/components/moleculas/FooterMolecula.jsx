import { SiThemighty } from "react-icons/si";
import Likendin from "../atomos/Likendin";

const FoterMolecula = () => {
  const Facebook = {
    height: 32,
    width: 32,
    url: "https://www.facebook.com/miguel.osorio.123829/",
  };
  const instagram ={
    height: 32,
    width: 32,
    url: "https://www.instagram.com/@miguelangelosorio04"
  }
  const toktok ={
    height: 32,
    width: 32,
    url: "https://www.tiktok.com/@miguelangelosorio04"
  }
  return (
    <>
      <div className="w-[40%]   flex  items-center  justify-between flex-col md:flex-row">
        <div className="flex justify-center items-center   flex-col gap-2">
          <SiThemighty className="text-white rounded-md border flex size-9" />
          <h1 className=" font-roboto text-white text-center">MIGUEL ANGEL</h1>
        </div>
        <div className="flex  justify-center flex-wrap gap-3 text-white">
          <Likendin props={Facebook} />
          <Likendin props={instagram} />
          <Likendin props={toktok} />
        </div>
        <div className="flex">
          <p className="text-white font-roboto text-center self-end">
            &copy; Todos los derechos reservados.
          </p>
        </div>
      
      </div>
    </>
  );
};
export default FoterMolecula;
