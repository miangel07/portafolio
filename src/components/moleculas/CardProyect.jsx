import Cards from "../atomos/Card";
import Cardbody from "../atomos/CardBody";
import Cardheader from "../atomos/CardHeader";
import Images from "../atomos/Image";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { FaCode } from "react-icons/fa6";
import MyButton from "../atomos/Boton";

const CardProyect = () => {
  const propsImages = {
    alt: "Card background",
    className: "object-cover rounded-xl",
    src: "/MejorAmigo.png",
    width: 150,
  };

  return (
    <>
      <div className="w-full flex flex-wrap">
        <Cards className={" flex w-full"}>
          <Cardheader className={"pb-0 pt-2 px-4 flex-col items-start"}>
            <div className="flex  w-full justify-between items-center p-2 mt-6 flex-wrap">
              <h1 className="uppercase font-bebas text-4xl ">Mascotas</h1>
              <MyButton className="text-white bg-blue-400 border-solid border-2 border-blue-400  flex items-center">
                CODE <FaCode />
              </MyButton>
            </div>

            <div className="text-black-300">
              Creado con react, Tailwind, con mongo y node
            </div>
            <div className="font-bold text-large mt-2 flex flex-wrap gap-5">
              <div className="w-32 justify-center rounded-md bg-slate-300 items-center flex flex-row">
                <RiTailwindCssFill className="w-5 h-5 mr-2 text-blue-500" />
                <p className="flex">Tailwind</p>
              </div>
              <div className="w-32 justify-center rounded-md bg-slate-300 items-center flex flex-row">
                <RiReactjsLine className="w-5 h-5 mr-2 text-blue-600" />
                <p className="flex">React</p>
              </div>
              <div className="w-32 justify-center rounded-md bg-slate-300 items-center flex flex-row">
                <BiLogoMongodb className="w-5 h-5 mr-2 text-green-400" />
                <p className="flex">Mongo</p>
              </div>
            </div>
          </Cardheader>
          <Cardbody>
            <div className="flex justify-center items-center mt-4 ">
              <Images {...propsImages}></Images>
            </div>
          </Cardbody>
        </Cards>
      </div>
    </>
  );
};
export default CardProyect;
