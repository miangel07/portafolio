import { Avatar } from "@nextui-org/react";
import { Image } from "@nextui-org/react";


const Foto = () => {
  return (
    <Image
      className="flex rounded-full h-28 w-28  md:h-28 md:w-28"
      alt="NextUI hero Image"
      src={"/foto_miguel.jpg"}
    />
  );
};

export default Foto;
