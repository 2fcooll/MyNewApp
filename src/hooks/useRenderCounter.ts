import { useEffect, useRef } from "react";

const useRenderCounter = (componentName: string) => {
    const renderCounter = useRef(0);
    renderCounter.current += 1;

    useEffect(() => {
        return () => {
            renderCounter.current = 0;
        };
    }, []);

    console.log(`${componentName}: ${renderCounter.current}`);
};

export { useRenderCounter };