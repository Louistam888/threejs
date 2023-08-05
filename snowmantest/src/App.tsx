import "./App.css";
import Model from "./Model";
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
        quibusdam repellendus voluptatum ducimus laudantium numquam soluta
        facere impedit aperiam odio itaque repellat tenetur libero amet odit
        fuga, explicabo minima illum! Fugit voluptatum voluptatibus dicta veniam
        doloribus similique! Maiores, perspiciatis eius sapiente laborum, nemo
        placeat incidunt optio amet veritatis error dolor.
      </div>
      <Canvas style={{ background: "white" }}>
        <Model />
      </Canvas>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas quaerat,
        a alias soluta nulla error consequuntur eum aut dolores provident dolore
        expedita quam laboriosam, velit aliquid accusantium molestias. Expedita
        aut illum labore beatae sapiente vero minima debitis quasi maiores ea
        soluta consectetur commodi molestiae, quo amet deserunt ut. Eos,
        facilis?
      </div>
    </div>
  );
};

export default App;
