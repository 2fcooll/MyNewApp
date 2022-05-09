import React, { FC, useMemo } from "react";
import { View } from "react-native";
import { Props } from './FiltersBottomSheet.props';
import { styles } from "./FiltersBottomSheet.styles";
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { w } from "../../styles/scale";
import { COMPONENT_SIZES } from "../../constants/componentSizes";
import { useSelector } from "react-redux";
import { selectTabBarHeight } from "../../store/selectors/navigationState";

const FiltersBottomSheet: FC<Props> = () => {
    const tabBarHeight = useSelector(selectTabBarHeight);
    const snapPoints = useMemo(() => [w(364)], []);
    const bottomInset = useMemo(() => tabBarHeight + COMPONENT_SIZES.TAB_BAR.BOTTOM_OFFSET + w(20), [tabBarHeight]);

    return (
        <BottomSheet 
            enablePanDownToClose
            snapPoints={snapPoints}
            bottomInset={bottomInset}
            handleHeight={0}
            detached={true}
            style={styles.sheet}
            backgroundStyle={styles.sheetBackground}
            handleStyle={styles.sheetHandle}
            handleComponent={null}
        >
            <BottomSheetScrollView 
                // style={styles.content}
            >
                <View style={styles.line} />
            </BottomSheetScrollView>
        </BottomSheet>
    );
};

export { FiltersBottomSheet };