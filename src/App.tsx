import { Canvas } from "@react-three/fiber";
import { Physics, useBox, useCircle } from "@react-three/p2";
import "./App.css";

function App() {
  return (
    <Canvas>
      <Physics normalIndex={2}>
        <Box />
        <Ball />
      </Physics>
    </Canvas>
  );
}

function Box() {
  const [ref] = useBox(() => ({ mass: 0, position: [0, -2] }));
  return (
    <mesh ref={ref}>
      <boxGeometry />
    </mesh>
  );
}

function Ball() {
  const [ref] = useCircle(() => ({ mass: 1, position: [0, 2] }));
  return (
    <mesh ref={ref}>
      <sphereGeometry />
    </mesh>
  );
}

export default App;
