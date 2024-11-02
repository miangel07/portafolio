import Cards from "../atomos/Card";
import Cardbody from "../atomos/CardBody";
import Cardheader from "../atomos/CardHeader";
import Images from "../atomos/Image";

import MyButton from "../atomos/Boton";
import { FaCode } from "react-icons/fa6";

const CrudProyect = ({ titulo, creado, tc1, tec2, tec3, icono1, icono2, icono3, link, propsImages }) => {


  return (
    <>
      <div className="w-full flex flex-wrap">
        <Cards className={"py-8 flex w-full"}>
          <Cardheader className={"pb-0 pt-2 px-4 flex-col items-start "}>
            <div className="flex  w-full justify-between items-center p-2 mt-6 flex-wrap ">
              <h1 className="uppercase font-bebas text-4xl">{titulo}</h1>
              <MyButton onClick={() => window.location.href = link} className="text-white bg-blue-400 border-solid border-2 border-blue-400  flex items-center">
                CODE<FaCode />
              </MyButton>
            </div>
            <div className="text-black-300">
              {creado}
            </div>
            <div className="font-bold text-large mt-2 flex flex-wrap gap-5">
              <div className="w-32 justify-center rounded-md bg-slate-300 items-center flex flex-row">
                {icono1}
                <p className="flex">{tc1}</p>
              </div>
              {
                tec2 && (<>
                  <div className="w-32 justify-center rounded-md bg-slate-300 items-center flex flex-row">
                    {icono2}
                    <p className="flex">{tec2}</p>
                  </div>
                </>)
              }
              {tec3 && (
                <>
                  <div className="w-32 justify-center rounded-md bg-slate-300 items-center flex flex-row">
                    {icono3}
                    <p className="flex">{tec3}</p>
                  </div>
                </>
              )

              }

            </div>
          </Cardheader>
          <Cardbody>
            <div className="flex justify-center items-center mt-4">
              <Images {...propsImages}></Images>
            </div>
          </Cardbody>

        </Cards>
      </div>
    </>
  );

}
export default CrudProyect