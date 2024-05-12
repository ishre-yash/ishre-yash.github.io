import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

export default function App() {
    return (
        <div className="fixed inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 2.5] }}>
                <Stars />
            </Canvas>
        </div>

    );
}
function Stars(props) {
    const ref = useRef();
    const sphere = useMemo(() => random.inSphere(new Float32Array(500), { radius: 2 }), [])
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });
    return (
        <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
            <Points
                positions={sphere}
                stride={3}
                frustumCulled={false}
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#0072ff"
                    size={0.050}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}
