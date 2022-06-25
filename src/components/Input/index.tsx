import React, { ForwardedRef, forwardRef, ForwardRefRenderFunction, memo } from "react";
import { TextInput, View } from "react-native";
import { Button } from "../Button";
import { Props } from "./Input.props";
import { styles } from "./Input.styles";

const InputFunc: ForwardRefRenderFunction<any, Props> = ({ 
    leftIconColor, 
    leftIconName, 
    leftIconSize,
    onLeftIconPress,
    rightIconColor,
    rightIconName,
    rightIconSize,
    onRightIconPress,
    containerStyle,
    inputStyle,
    rightIconContainerStyle,
    ...props 
}, ref: ForwardedRef<any>) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {!!leftIconName && (
                <Button 
                    iconColor={leftIconColor}
                    iconName={leftIconName}
                    iconSize={leftIconSize}
                    onPress={onLeftIconPress}
                />
            )}
            <TextInput 
                ref={ref}
                style={[styles.input, inputStyle]} 
                {...props} 
            />
            {!!rightIconName && (
                <Button 
                    containerStyle={rightIconContainerStyle}
                    iconColor={rightIconColor}
                    iconName={rightIconName}
                    iconSize={rightIconSize}
                    onPress={onRightIconPress}
                />
            )}
        </View>
    );
};

export const Input = memo(forwardRef(InputFunc));