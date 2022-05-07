import React, { FC, useMemo } from "react";
import { Props } from './LoginBottomSheet.props';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Input } from "../Input";
import { styles } from "./LoginBottomSheet.styles";
import { View } from "react-native";
import { Colors } from "../../styles/colors";
import { Button } from "../Button";
import { w } from "../../styles/scale";
import { useSelector } from "react-redux";
import { selectTabBarHeight } from "../../store/selectors/navigationState";
import { COMPONENT_SIZES } from "../../constants/componentSizes";

const LoginBottomSheet: FC<Props> = () => {
    const tabBarHeight = useSelector(selectTabBarHeight);
    const snapPoints = useMemo(() => [w(250)], []);
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
            <BottomSheetScrollView style={styles.content}>
                <View style={styles.line} />
                <Input 
                    placeholderTextColor={Colors.SONIC_SILVER} 
                    placeholder='Почта' 
                    inputStyle={styles.input} 
                />
                <View style={styles.form}>
                    <Button 
                        containerStyleText={styles.resetPasswordText} 
                        containerStyle={styles.resetPasswordButton} 
                        innerText='Восстановить пароль' 
                    />
                    <Input 
                        placeholderTextColor={Colors.SONIC_SILVER} 
                        placeholder='Пароль' 
                        inputStyle={styles.input} 
                    />
                </View>
            </BottomSheetScrollView>
        </BottomSheet>
    );
};

export { LoginBottomSheet };