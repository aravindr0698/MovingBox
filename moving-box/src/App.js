import { useState } from "react";
import "./App.scss";
import { getIdAndPosition } from "./helper";

function App() {
  const [currentPosition, setPosition] = useState(0);
  const [id, setId] = useState(0);

  const moveBox = (direction) => {
    const { newPosition, newId } = getIdAndPosition(currentPosition, direction);
    setId(newId);
    setPosition(newPosition);
  };

  return (
    <div id="parent">
      <div id="box-container">
        <div className="box" id={`${id}`}></div>
      </div>
      <div id="buttons">
        <div>
          <button onClick={() => moveBox("forward")} id="btn-forward">
            Forward
          </button>
        </div>
        <div>
          <button onClick={() => moveBox("backward")} id="btn-backward">
            Backward
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;