import React, { FC, memo, useEffect, useRef } from "react";
import { TextInput, View } from "react-native";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";
import { Input } from "../Input";
import { styles } from "./SearchLocationSummary.styles";
import { Props } from './SearchLocationSummary.props';

const SearchLocationSummaryFunc: FC<Props> = ({
    isDetailsOpened,
}) => {
    const inputRef = useRef<TextInput>(null);

    useEffect(() => {
        if (isDetailsOpened && inputRef.current) inputRef.current?.focus();
        else inputRef.current?.blur();
    }, [isDetailsOpened]);

    return (
        <View pointerEvents='none'>
            <Input 
                ref={inputRef}
                rightIconName='SearchOutline' 
                rightIconSize={w(25)} 
                rightIconColor={Colors.SONIC_SILVER} 
                inputStyle={styles.input}
                containerStyle={styles.inputContainer}
                placeholder='Местоположение'
                placeholderTextColor={Colors.SONIC_SILVER}
            />
        </View>
    );
};

export const SearchLocationSummary = memo(SearchLocationSummaryFunc);