import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { createContext, RefObject } from "react";
import Animated from "react-native-reanimated";

export interface BottomSheetContextType {
    LoginBottomSheetAnimatedPosition: Animated.SharedValue<number>,
    LoginBottomSheetRef: RefObject<BottomSheetMethods>,
    FiltersBottomSheetRef: RefObject<BottomSheetMethods>,
};

export const BottomSheetContext = createContext<BottomSheetContextType|null>(null);
export const BottomSheetContextProvider = BottomSheetContext.Provider;