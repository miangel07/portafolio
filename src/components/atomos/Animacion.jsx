import { TypeAnimation } from 'react-type-animation';

const AnimacionNombre = () => {
  return (
    <TypeAnimation
      sequence={[
       
        'Hola, Soy Miguel Osorio',
        1000, 
        "Hello, I'm Miguel Osorio",
        1000,
        'desarrollador junior front-end',
        1000,
        'junior front-end developer',
        1000
      ]}
      wrapper="span"
      speed={60}
      style={{ fontSize: '2em', display: 'inline-block',fontFamily: "Bebas Neue" }}
      repeat={Infinity}
    />
  );
};
export default AnimacionNombre;