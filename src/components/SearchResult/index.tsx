import React, { FC, memo } from "react";
import { Text, View } from "react-native";
import { Props } from './SearchResult.props';
import { styles } from "./SearchResult.styles";

const SearchResultFunc: FC<Props> = ({
    title,
    subTitle,
}) => {
    return (
        <View style={styles.resultSection}>
            <Text style={styles.resultTitle}>{title}</Text>
            <Text style={styles.resultNote}>{subTitle}</Text>
        </View>
    );  
};

export const SearchResult = memo(SearchResultFunc);