import Footer from "../organismos/Footer";
import HabilidadesOrganismo from "../organismos/HabilidadesOrganismo";

import Proyectos from "../organismos/Proyectos";
import SobreMi from "../organismos/SobreMi";
import SocialOrganismo from "../organismos/SocialOrganismo";

const Layout = () => {
  return (
    <>
      <section >
        <header id="sobre_mi" className=" flex justify-center">
          <SobreMi />
        </header>
        <div id="social" className="flex justify-center mt-16">
          <SocialOrganismo />
        </div>
        <div id="proyectos" className="flex  justify-center w-full mt-16">
          <Proyectos />
        </div>
        <div id="habilidades" className="flex  justify-center w-full mt-24">
          <HabilidadesOrganismo />
        </div>
       
          <Footer/>
      
      </section>
    </>
  );
};
export default Layout;
