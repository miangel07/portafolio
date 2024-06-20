import { Code } from "@nextui-org/react";
const Correo = ({ children, ...props }) => {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Code {...props}>{children}</Code>
      </div>
    </>
  );
};
export default Correo;
