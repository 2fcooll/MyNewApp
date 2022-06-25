import React, { ForwardedRef, forwardRef, ForwardRefRenderFunction, memo, useMemo, useState } from "react";
import { Props } from './FiltersBottomSheet.props';
import { styles } from "./FiltersBottomSheet.styles";
import BottomSheet from '@gorhom/bottom-sheet';
import { w } from "../../styles/scale";
import { Slider } from "../Slider";
import { SearchInput } from "../SearchInput";
import { List } from "../List";
import { Categories } from "../Categories";
import { SearchLocation } from "../SearchLocation";
import { COMPONENT_SIZES } from "../../constants/componentSizes";
import { View } from "react-native";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

const FiltersBottomSheetFunc: ForwardRefRenderFunction<BottomSheetMethods, Props> = ({ ...props }, ref: ForwardedRef<any>) => {
    const snapPoints = useMemo(() => [w(373)], []);
    const [pos, setPos] = useState(0);

    const onChangeTotalVisibilityPos = (offset: number) => {
        setPos(offset);
    };

    return (
        <BottomSheet 
            {...props}
            ref={ref}
            enablePanDownToClose
            snapPoints={snapPoints}
            handleHeight={0}
            detached={true}
            style={styles.sheet}
            backgroundStyle={styles.sheetBackground}
            handleStyle={styles.sheetHandle}
            handleComponent={null}
            bottomInset={COMPONENT_SIZES.TAB_BAR.BOTTOM_OFFSET}
            index={-1}
        >
            <List 
                isTabBar={false}
                yPos={pos}
                showsVerticalScrollIndicator={false}
                insideBottomSheet={true}
                contentContainerStyle={styles.content}
            >
                <View style={styles.line} />
                <SearchInput onChangeTotalVisibilityPos={onChangeTotalVisibilityPos} />
                <Slider />
                <Categories onChangeTotalVisibilityPos={onChangeTotalVisibilityPos} />
                <SearchLocation onChangeTotalVisibilityPos={onChangeTotalVisibilityPos} />
            </List>
        </BottomSheet>
    );
};

export const FiltersBottomSheet = memo(forwardRef(FiltersBottomSheetFunc));