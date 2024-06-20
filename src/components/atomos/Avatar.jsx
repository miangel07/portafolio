import { Avatar } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import foto from "../../../public/foto_miguel.jpg";

const Foto = () => {
  return (
    <Image
      className="flex rounded-full h-28 w-28  md:h-28 md:w-28"
      alt="NextUI hero Image"
      src={foto}
    />
  );
};

export default Foto;
