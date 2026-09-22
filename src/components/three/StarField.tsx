"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useScrollStore } from "@/hooks/useScrollProgress";

export default function StarField({ count = 1200 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const scrollProgress = useScrollStore((s) => s.progress);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const ice = new THREE.Color("#D4F5F7");
    const softCyan = new THREE.Color("#6EE7EB");
    const white = new THREE.Color("#FFFFFF");
    const silver = new THREE.Color("#E8EEF0");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Deterministic pseudo-random generation to adhere to React purity rules
      const r1 = Math.abs(Math.sin(i * 12.9898 + 78.233) * 43758.5453) % 1;
      const r2 = Math.abs(Math.sin((i + 1) * 39.346 + 11.135) * 43758.5453) % 1;
      const r3 = Math.abs(Math.sin((i + 2) * 73.156 + 54.213) * 43758.5453) % 1;
      const r4 = Math.abs(Math.sin((i + 3) * 91.827 + 29.471) * 43758.5453) % 1;

      // Spread across a cylindrical volume
      const radius = 8 + r1 * 24;
      const theta = r2 * Math.PI * 2;
      const y = (r3 - 0.5) * 35;

      pos[i3] = Math.cos(theta) * radius;
      pos[i3 + 1] = y;
      pos[i3 + 2] = (r4 - 0.5) * 20 - 4;

      // Color variation: clean stars
      const r = r1;
      const c = r > 0.7 ? ice : r > 0.4 ? softCyan : r > 0.2 ? silver : white;
      col[i3] = c.r;
      col[i3 + 1] = c.g;
      col[i3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    // Gentle ambient drift + scroll responsiveness
    pointsRef.current.rotation.y += delta * 0.03;
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(
      pointsRef.current.rotation.x,
      scrollProgress * 0.4,
      0.05
    );
    // Move along z as user scrolls to create warp / drift sensation
    pointsRef.current.position.z = THREE.MathUtils.lerp(
      pointsRef.current.position.z,
      -scrollProgress * 6,
      0.05
    );
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
