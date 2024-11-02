import CardProyect from "../moleculas/CardProyect";
import { BsRocketTakeoff } from "react-icons/bs";
import CrudProyect from "../moleculas/CrudProyect";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
const Proyectos = () => {
  const propsImages = {
    alt: "Card background",
    className: "object-cover ",
    src: "/Naturvida.jpg",
    width: 150,
  };
  const propsImages2 = {
    alt: "Card background",
    className: "object-cover rounded-xl",
    src: "/image.png",
    width: 150,
  };
  return (
    <>
      <div className="flex w-[40%]  mt-12">
        <div className="flex gap-5 justify-center flex-wrap w-full" >
          <BsRocketTakeoff className="w-10 h-10 text-yellow-900" />
          <h1 className="font-bebas  text-4xl">PROYECTOS</h1>

          <div className="mt-16 flex flex-wrap gap-3 w-full ">
            <CardProyect />

            <CrudProyect propsImages={propsImages} link={"https://github.com/miangel07/naturvida"}
              icono1={<RiTailwindCssFill className="w-5 h-5 mr-2 text-blue-500" />} icono2={<RiNextjsFill />} icono3={<BiLogoMongodb className="w-5 h-5 mr-2 text-green-400" />}
              creado={"Proyecto creado en Next"} tc1={"Tailwind"} tec2={"Next"} tec3={"Mongo"} titulo={"Naturvida"} />

            <CrudProyect propsImages={propsImages2}  creado={"Juego de tictac toe"} tc1={"React"} icono1={<RiReactjsLine className="w-5 h-5 mr-2 text-blue-600" />} titulo={"Tic Tac"} link={"https://wonderful-conkies-7660c8.netlify.app/"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Proyectos;
