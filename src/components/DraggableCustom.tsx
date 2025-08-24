import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

interface DraggableCustomProps {
    id: string;
    children: React.ReactNode;
}

let maxZ = 0;

const DraggableCustom: React.FC<DraggableCustomProps> = ({ id, children }) => {
    const childRef = useRef<HTMLDivElement>(null);
    const [currentZ, setCurrentZ] = useState(() => {
        maxZ++;
        return maxZ;
    });

    const bringToFront = () => {
        maxZ++;
        setCurrentZ(maxZ);
        console.log("Bringing to front:", id, "with z-index", maxZ);
    };

    return (
        <Draggable
            nodeRef={childRef}
            bounds="parent"
            handle=".handle"
            onStart={bringToFront}
        >
            <div
                ref={childRef}
                style={{ zIndex: currentZ, position: 'absolute', cursor: 'default' }}
            >
                {children}
            </div>
        </Draggable>
    );
};

export default DraggableCustom;
