import React, { createContext, useContext, useState } from 'react';

const ZIndexContext = createContext<any>(null);

export const ZIndexProvider = ({ children }: { children: React.ReactNode }) => {
    const [maxZ, setMaxZ] = useState(0);
    const [zIndexMap, setZIndexMap] = useState<Record<string, number>>({});

    const bringToFront = (id: string) => {
        const newZ = maxZ + 1;

        console.log("Bringing to front:", id, "with z-index", newZ);

        setMaxZ(newZ);
        setZIndexMap(prev => ({ ...prev, [id]: newZ }));
    };

    return (
        <ZIndexContext.Provider value={{ zIndexMap, bringToFront }}>
            {children}
        </ZIndexContext.Provider>
    );
};

export const useZIndex = () => useContext(ZIndexContext);
