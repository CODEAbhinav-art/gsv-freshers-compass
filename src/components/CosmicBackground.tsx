import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const STAR_COUNT = 1000;

function Starfield() {
  const ref = useRef<THREE.Points>(null);

  const { positions, sizes, baseOpacities, speeds, colors } = useMemo(() => {
    const positions = new Float32Array(STAR_COUNT * 3);
    const sizes = new Float32Array(STAR_COUNT);
    const baseOpacities = new Float32Array(STAR_COUNT);
    const speeds = new Float32Array(STAR_COUNT);
    const colors = new Float32Array(STAR_COUNT * 3);

    for (let i = 0; i < STAR_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = Math.random() * -50;

      sizes[i] = Math.random() * 3 + 1.5;
      baseOpacities[i] = Math.random() * 0.5 + 0.4;
      speeds[i] = Math.random() * 0.4 + 0.1;

      // Slight color variation: white, blue-white, warm-white
      const colorType = Math.random();
      if (colorType < 0.5) {
        colors[i * 3] = 1.0; colors[i * 3 + 1] = 1.0; colors[i * 3 + 2] = 1.0; // white
      } else if (colorType < 0.8) {
        colors[i * 3] = 0.8; colors[i * 3 + 1] = 0.85; colors[i * 3 + 2] = 1.0; // blue-white
      } else {
        colors[i * 3] = 1.0; colors[i * 3 + 1] = 0.95; colors[i * 3 + 2] = 0.8; // warm
      }
    }
    return { positions, sizes, baseOpacities, speeds, colors };
  }, []);

  const opacities = useMemo(() => new Float32Array(STAR_COUNT), []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const geo = ref.current.geometry;
    const posAttr = geo.getAttribute("position") as THREE.BufferAttribute;
    const opAttr = geo.getAttribute("aOpacity") as THREE.BufferAttribute;
    const t = clock.getElapsedTime();

    for (let i = 0; i < STAR_COUNT; i++) {
      // Slow forward drift
      let z = posAttr.getZ(i) + 0.008;
      if (z > 0) z -= 50;
      posAttr.setZ(i, z);

      // Twinkle
      const base = baseOpacities[i];
      opacities[i] = base * (0.5 + 0.5 * Math.sin(t * speeds[i] * 2.5 + i * 1.7));
      opAttr.setX(i, opacities[i]);
    }
    posAttr.needsUpdate = true;
    opAttr.needsUpdate = true;
  });

  const shaderMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.NormalBlending,
        uniforms: {},
        vertexShader: `
          attribute float aSize;
          attribute float aOpacity;
          attribute vec3 aColor;
          varying float vOpacity;
          varying vec3 vColor;
          void main() {
            vOpacity = aOpacity;
            vColor = aColor;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = aSize * (150.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying float vOpacity;
          varying vec3 vColor;
          void main() {
            float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            float glow = smoothstep(0.5, 0.0, d);
            float alpha = vOpacity * glow * glow;
            gl_FragColor = vec4(vColor, alpha);
          }
        `,
      }),
    []
  );

  return (
    <points ref={ref} material={shaderMaterial}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-aOpacity" args={[new Float32Array(STAR_COUNT).fill(0.5), 1]} />
        <bufferAttribute attach="attributes-aColor" args={[colors, 3]} />
      </bufferGeometry>
    </points>
  );
}

export const CosmicBackground = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (reducedMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ width: "100vw", height: "100vh", zIndex: 50 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 100 }}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
        frameloop="always"
      >
        <Starfield />
      </Canvas>
    </div>
  );
};
