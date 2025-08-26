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
    };

    return (
        <Draggable
            nodeRef={childRef}
            bounds="body"
            handle=".handle"
            onStart={bringToFront}
        >
            <div
                ref={childRef}
                style={{ zIndex: currentZ, position: 'relative', cursor: 'default' }}
            >
                {children}
            </div>
        </Draggable>
    );
};

export default DraggableCustom;
