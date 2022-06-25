import React, { FC, memo, useEffect, useRef, useState } from "react";
import { TextInput, View } from "react-native";
import Animated from "react-native-reanimated";
import { useAnimation } from "../../hooks/useAnimation";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";
import { Icon } from "../Icon";
import { Input } from "../Input";
import { Props } from './SearchSummary.props';
import { styles } from "./SearchSummary.styles";

const SearchSummaryFunc: FC<Props> = ({
    isDetailsOpened,
    setIsDetailsOpened,
}) => {
    const inputRef = useRef<TextInput>(null);
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [containerAnimatedValue, containerAnimatedStyle, startContainerAnimation] = useAnimation('SearchInputContainerPadding');
    const [inputAnimatedValue, inputAnimatedStyle, startInputAnimation] = useAnimation('SearchInputTranslateX');

    useEffect(() => {
        if (isDetailsOpened) {
            startContainerAnimation(1);
            startInputAnimation(1, () => {
                inputRef.current?.focus();
            });
        } else {
            startContainerAnimation(0);
            startInputAnimation(0, () => {
                inputRef.current?.blur();
            });
        }
    }, [isDetailsOpened]);

    const onFocus = () => {
        setIsInputFocused(true);
    };

    const onBlur = () => {
        setIsInputFocused(false);
        setIsDetailsOpened(false);
    };

    return (
        <Animated.View style={[styles.container, containerAnimatedStyle]}>
            <Animated.View pointerEvents='none' style={[styles.inputContainer, inputAnimatedStyle]}>
                <View style={styles.inputLeftIconContainer}>
                    <Icon 
                        name='SearchOutline' 
                        color={isDetailsOpened ? Colors.MATTERHORN : Colors.SONIC_SILVER} 
                        size={w(25)} 
                    />
                    <View style={[styles.inputLeftIconFiling, isDetailsOpened && { opacity: 1 }]} />
                </View>
                <Input
                    ref={inputRef}
                    placeholderTextColor={Colors.SONIC_SILVER} 
                    placeholder='Поиск' 
                    style={styles.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    rightIconContainerStyle={styles.inputRightIconContainer}
                    rightIconName='Close'
                    rightIconColor={Colors.WHITE}
                    rightIconSize={w(8)}
                    containerStyle={styles.inputInnerContainer}
                />
            </Animated.View>
        </Animated.View>
    );
};

export const SearchSummary = memo(SearchSummaryFunc);