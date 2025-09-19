import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface DeviceContextValue {
    isMobile: boolean;
}

const DeviceContext = createContext<DeviceContextValue>({ isMobile: false });

export const DeviceProvider = ({ children }: { children: ReactNode }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent;
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
    }, []);

    return (
        <DeviceContext.Provider value={{ isMobile }}>
            {children}
        </DeviceContext.Provider>
    );
};

export const useDevice = () => useContext(DeviceContext);
