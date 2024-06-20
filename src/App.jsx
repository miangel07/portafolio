import { Route, Routes } from "react-router-dom";
import CardProyect from "./components/moleculas/CardProyect";
import Layout from "./components/templates/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
};

export default App;
