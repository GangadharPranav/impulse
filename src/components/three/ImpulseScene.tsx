"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import StarField from "./StarField";
import EmblemCore from "./EmblemCore";
import Effects from "./Effects";

export default function ImpulseScene() {
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [dpr, setDpr] = useState<number>(1.5);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // 1. Check WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    // 2. Performance budget: cap DPR (1.5 on desktop, 1.0 on mobile)
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    setDpr(mobile ? 1.0 : Math.min(window.devicePixelRatio, 1.5));

    const handleResize = () => {
      const m = window.innerWidth < 768;
      setIsMobile(m);
      setDpr(m ? 1.0 : Math.min(window.devicePixelRatio, 1.5));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!hasWebGL) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={dpr}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0); // transparent background so DOM styles blend
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-10, -5, -5]} intensity={0.4} color="#033744" />

        <Suspense fallback={null}>
          <StarField count={isMobile ? 500 : 1200} />
          <EmblemCore />
          {!isMobile && <Effects />}
        </Suspense>
      </Canvas>
    </div>
  );
}
