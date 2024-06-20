import Footer from "../organismos/Footer";
import HabilidadesOrganismo from "../organismos/HabilidadesOrganismo";
import Menu from "../organismos/Navbar";
import Proyectos from "../organismos/Proyectos";
import SobreMi from "../organismos/SobreMi";
import SocialOrganismo from "../organismos/SocialOrganismo";

const Layout = () => {
  return (
    <>
      <div >
        <div id="sobre_mi" className=" flex justify-center">
          <SobreMi />
        </div>
        <div id="social" className="flex justify-center mt-16">
          <SocialOrganismo />
        </div>
        <div id="proyectos" className="flex  justify-center w-full mt-16">
          <Proyectos />
        </div>
        <div id="habilidades" className="flex  justify-center w-full mt-24">
          <HabilidadesOrganismo />
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </>
  );
};
export default Layout;
