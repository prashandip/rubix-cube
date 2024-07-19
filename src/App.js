import Cube from "./components/Cube";
import "./styles/main.sass";
import "./styles/cube/cube.sass";
import ArrowIcon from "./icons/ArrowIcon";
import { useDispatch, useSelector } from "react-redux";
import { setCubeRotateX, setCubeRotateY } from "./store/cubeSlice";

function App() {
  const dispatch = useDispatch();
  const cubeRotateX = useSelector((state) => state.cube.cubeRotateX);
  const cubeRotateY = useSelector((state) => state.cube.cubeRotateY);
  return (
    <section className="container">
      <div className="rotate-buttons">
        <button
          className="arrow up"
          onClick={() => dispatch(setCubeRotateX(cubeRotateX + 10))}
        >
          <ArrowIcon />
        </button>
        <button
          className="arrow down"
          onClick={() => dispatch(setCubeRotateX(cubeRotateX - 10))}
        >
          <ArrowIcon />
        </button>
        <button
          className="arrow left"
          onClick={() => dispatch(setCubeRotateY(cubeRotateY - 10))}
        >
          <ArrowIcon />
        </button>
        <button
          className="arrow right"
          onClick={() => dispatch(setCubeRotateY(cubeRotateY + 10))}
        >
          <ArrowIcon />
        </button>
      </div>
      <section className="wrapper">
        <Cube />
      </section>
    </section>
  );
}

export default App;
