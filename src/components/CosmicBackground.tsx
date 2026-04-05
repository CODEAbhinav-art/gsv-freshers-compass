import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const STAR_COUNT = 900;

function Starfield() {
  const ref = useRef<THREE.Points>(null);

  const { positions, sizes, opacities, speeds } = useMemo(() => {
    const positions = new Float32Array(STAR_COUNT * 3);
    const sizes = new Float32Array(STAR_COUNT);
    const opacities = new Float32Array(STAR_COUNT);
    const speeds = new Float32Array(STAR_COUNT);

    for (let i = 0; i < STAR_COUNT; i++) {
      // Spread stars in a large box around the camera
      positions[i * 3] = (Math.random() - 0.5) * 40;     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50; // z depth

      sizes[i] = Math.random() * 1.5 + 0.3;
      opacities[i] = Math.random() * 0.5 + 0.15;
      speeds[i] = Math.random() * 0.3 + 0.1; // individual twinkle speed
    }
    return { positions, sizes, opacities, speeds };
  }, []);

  // Slow forward drift + subtle twinkle
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const geo = ref.current.geometry;
    const posAttr = geo.getAttribute("position") as THREE.BufferAttribute;
    const opAttr = geo.getAttribute("aOpacity") as THREE.BufferAttribute;
    const t = clock.getElapsedTime();

    for (let i = 0; i < STAR_COUNT; i++) {
      // Slow forward movement (z drift)
      let z = posAttr.getZ(i) + 0.003;
      if (z > 25) z -= 50; // wrap around
      posAttr.setZ(i, z);

      // Twinkle
      const base = opacities[i];
      const twinkle = base * (0.6 + 0.4 * Math.sin(t * speeds[i] * 2 + i));
      opAttr.setX(i, twinkle);
    }
    posAttr.needsUpdate = true;
    opAttr.needsUpdate = true;
  });

  const shaderMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: {},
        vertexShader: `
          attribute float aSize;
          attribute float aOpacity;
          varying float vOpacity;
          void main() {
            vOpacity = aOpacity;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = aSize * (200.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying float vOpacity;
          void main() {
            float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            float alpha = vOpacity * smoothstep(0.5, 0.1, d);
            gl_FragColor = vec4(0.85, 0.9, 1.0, alpha);
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
        <bufferAttribute attach="attributes-aOpacity" args={[opacities, 1]} />
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
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60, near: 0.1, far: 100 }}
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
