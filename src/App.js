import Cube from "./components/Cube";
import "./styles/main.sass";
import "./styles/cube/cube.sass";
import AlgorithmToolbar from "./components/AlgorithmToolbar";
import RotationToolbar from "./components/RotationToolbar";

function App() {
  return (
    <section className="container">
      <RotationToolbar />
      <section className="wrapper">
        <Cube />
      </section>
      <AlgorithmToolbar />
    </section>
  );
}

export default App;
