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
          <FaGithub className="size-32" /> <p className="font-mono">GitHub</p>
        </MyButton>

        <MyButton className={"w-50"}>
          <Likendin props={style}></Likendin>
          <p className="font-mono">Likendin</p>
        </MyButton>
      </div>
    </>
  );
};
export default Social;
