import MyButton from "../atomos/Boton";
import { FaGithub } from "react-icons/fa";
import Likendin from "../atomos/Likendin";

const Social = () => {
  const style = {
    height: 32,
    width: 32,
    url: "www.linkedin.com/in/miguel-osorio-78280325b",
  };
  return (
    <>
      <div className="flex flex-row gap-3 mt-4 flex-wrap">
        <MyButton className={"w-50"}>
          <FaGithub className="size-32" /> <a href="https://github.com/miangel07" className="font-mono">GitHub</a>
        </MyButton>

        <MyButton className={"w-50"}>
          <Likendin props={style}></Likendin>
          <a href="https://www.linkedin.com/in/miguelOsorio" className="font-mono">Likendin</a>
        </MyButton>
      </div>
    </>
  );
};
export default Social;
