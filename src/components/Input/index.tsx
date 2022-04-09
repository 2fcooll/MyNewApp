import { FC, useMemo } from "react";
import { TextInput, View } from "react-native";
import { Button } from "../Button";
import { Props } from "./Input.props";
import { styles } from "./Input.styles";

const Input: FC<Props> = ({ 
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
    ...props 
}) => {
    const cachedContainerStyle = useMemo(() => [styles.container, containerStyle], [containerStyle]);
    const cachedInputStyle = useMemo(() => [styles.input, inputStyle], [inputStyle]);

    return (
        <View style={cachedContainerStyle}>
            <Button 
                iconColor={leftIconColor}
                iconName={leftIconName}
                iconSize={leftIconSize}
                onPress={onLeftIconPress}
            />
            <TextInput 
                style={cachedInputStyle} 
                {...props} 
            />
            <Button 
                iconColor={rightIconColor}
                iconName={rightIconName}
                iconSize={rightIconSize}
                onPress={onRightIconPress}
            />
        </View>
    );
};

export { Input };