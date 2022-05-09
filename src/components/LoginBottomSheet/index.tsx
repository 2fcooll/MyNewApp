import React, { ForwardedRef, forwardRef, ForwardRefRenderFunction, useImperativeHandle, useMemo, useRef } from "react";
import { Props } from './LoginBottomSheet.props';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Input } from "../Input";
import { styles } from "./LoginBottomSheet.styles";
import { View } from "react-native";
import { Colors } from "../../styles/colors";
import { Button } from "../Button";
import { w } from "../../styles/scale";
import { COMPONENT_SIZES } from "../../constants/componentSizes";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

const LoginBottomSheet: ForwardRefRenderFunction<BottomSheetMethods, Props> = ({ ...props }: Props, ref: ForwardedRef<any>) => {
    const snapPoints = useMemo(() => [w(250)], []);
    const bottomSheetRef = useRef<BottomSheet>(null);

    useImperativeHandle(ref, () => ({
        ...bottomSheetRef.current,
    }));

    return (
        <BottomSheet
            {...props}
            ref={bottomSheetRef}
            enablePanDownToClose
            snapPoints={snapPoints}
            bottomInset={COMPONENT_SIZES.TAB_BAR.BOTTOM_OFFSET}
            handleHeight={0}
            detached={true}
            style={styles.sheet}
            backgroundStyle={styles.sheetBackground}
            handleStyle={styles.sheetHandle}
            handleComponent={null}
            index={-1}
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

const forwardLoginBottomSheet = forwardRef(LoginBottomSheet);
export { forwardLoginBottomSheet as LoginBottomSheet };