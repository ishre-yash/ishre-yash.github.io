import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useTheme } from "next-themes";

export default function Background() {
    return (
        <div className="fixed inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 2.5] }}>
                <Stars />
            </Canvas>
        </div>

    );
}


function Stars(props) {
    const { theme } = useTheme();

    const ref = useRef();
    const sphere = useMemo(() => random.inSphere(new Float32Array(500), { radius: 2 }), [])
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    const color = theme === "dark" ? "#fff" : "#000";

    return (
        // eslint-disable-next-line react/no-unknown-property
        <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
            <Points
                positions={sphere}
                stride={3}
                frustumCulled={false}
                {...props}
            >
                <PointMaterial
                    transparent
                    color={color}
                    size={0.050}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}
