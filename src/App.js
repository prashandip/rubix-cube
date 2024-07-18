import Cube from "./components/Cube";
import "./styles/main.sass";
import "./styles/cube/cube.sass";

function App() {
  return (
    <section className="container">
      <section className="wrapper">
        <Cube />
      </section>
    </section>
  );
}

export default App;
