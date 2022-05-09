import { RefObject, useCallback, useRef } from "react";
import { LayoutChangeEvent, LayoutRectangle } from "react-native";

interface IUseLayout {
    (): [
        RefObject<LayoutRectangle>,
        (e: LayoutChangeEvent) => void,
    ],
};

const useLayout: IUseLayout = () => {
    const layout = useRef<LayoutRectangle|null>(null);

    const setLayout = useCallback((e: LayoutChangeEvent) => {
        layout.current = e.nativeEvent.layout;
    }, []);

    return [layout, setLayout];
};

export { useLayout };