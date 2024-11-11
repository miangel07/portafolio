import CardProyect from "../moleculas/CardProyect";
import { BsRocketTakeoff } from "react-icons/bs";
import CrudProyect from "../moleculas/CrudProyect";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
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
    src: "/imagen.png",
    width: 150,
  };
  const propsImages3 = {
    alt: "Card background",
    className: "object-cover rounded-xl",
    src: "/MejorAmigo.png",
    width: 150,
  };
  const propsImages4 = {
    alt: "Card background",
    className: "object-cover rounded-xl",
    src: "/imageCrud.png",
    width: 250,
  };
  return (
    <>
      <div className="flex w-[40%]  mt-12">
        <div className="flex gap-5 justify-center flex-wrap w-full" >
          <BsRocketTakeoff className="w-10 h-10 text-yellow-900" />
          <h1 className="font-bebas  text-4xl">PROYECTOS</h1>

          <div className="mt-16 flex flex-wrap gap-3 w-full ">
            <CrudProyect propsImages={propsImages4} creado={"CRUD básico con TypeScript de manera local"} tc1={"React"} tec2={"TypeScript"} icono2={<SiTypescript className="w-5 h-5 mr-2 text-blue-600" />} icono1={<RiReactjsLine className="w-5 h-5 mr-2 text-blue-600" />}
              titulo={"Crud Basico"} link={"https://crudmiguel.netlify.app/"} linkCode={"https://github.com/miangel07/crudTypeScript"} />
            <CrudProyect propsImages={propsImages2} creado={"Juego de tictac toe"} tc1={"React"}
              icono1={<RiReactjsLine className="w-5 h-5 mr-2 text-blue-600" />} titulo={"Tic Tac"} link={"https://wonderful-conkies-7660c8.netlify.app/"} linkCode={"https://github.com/miangel07/tic_tac"} />
            <CrudProyect propsImages={propsImages3} linkCode={"https://github.com/miangel07/Mascota.git"}
              icono1={<RiTailwindCssFill className="w-5 h-5 mr-2 text-blue-500" />} icono2={<RiReactjsLine className="w-5 h-5 mr-2 text-blue-600" />} icono3={<BiLogoMongodb className="w-5 h-5 mr-2 text-green-400" />}
              creado={"Proyecto creado en React"} tc1={"Tailwind"} tec2={"React"} tec3={"Mongo"} titulo={"Mascotas"} />

            <CrudProyect propsImages={propsImages} linkCode={"https://github.com/miangel07/naturvida"}
              icono1={<RiTailwindCssFill className="w-5 h-5 mr-2 text-blue-500" />} icono2={<RiNextjsFill />} icono3={<BiLogoMongodb className="w-5 h-5 mr-2 text-green-400" />}
              creado={"Proyecto creado en Next"} tc1={"Tailwind"} tec2={"Next"} tec3={"Mongo"} titulo={"Naturvida"} />


          </div>
        </div>
      </div>
    </>
  );
};

export default Proyectos;
