import Social from "../moleculas/Social";
import { PiHandshake } from "react-icons/pi";

const SocialOrganismo = () => {
  return (
    <>
      <div className="flex justify-start w-[40%] flex-col mt-5 gap-2 ">
        <div className="flex flex-row gap-5 items-center">
          <PiHandshake className="text-5xl  text-yellow-600" />
        <h1 className=" font-bebas text-4xl">social</h1>
        </div>
        <Social/>
      </div>
    </>
  );
};
export default SocialOrganismo;
