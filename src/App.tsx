import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Box, Environment, Html, OrbitControls } from "@react-three/drei";
import { Nature } from "./components/scene";
import { Hero } from "./components/hero";
import { Physics } from "@react-three/rapier";
import { Npc } from "./components/npc";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Canvas>
        <OrbitControls />

        <ambientLight intensity={0.2} />
        <Physics>
          <fog attach="fog" args={["#000", 0, 40]} />
          <Hero />
          <Html transform position={[0, 0, -20]}>
            {open ? (
              <div className="mockup-browser relative bg-base-300 ">
                <div
                  onClick={() => setOpen(false)}
                  className="absolute right-0 m-2 "
                >
                  close
                </div>
                <div className="mockup-browser-toolbar">
                  <div className="input">https://daisyui.com</div>
                </div>
                <iframe
                  width="1254"
                  height="705"
                  src="https://www.youtube.com/embed/oGxlM2NH7R0"
                  title="Creating a Web Game Engine with React, Three.js, Fiber, and TypeScript"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <button onClick={() => setOpen(true)}>Open</button>
            )}
          </Html>
          <Npc position={[5, 0, 0]} />

          <Environment preset="night" background />
          <Nature scale={[20, 20, 20]} />
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
