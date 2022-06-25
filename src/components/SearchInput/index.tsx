import React ,{ FC, memo, useState } from "react";
import { View } from "react-native";
import { Accordion } from "../Accordion";
import { SearchResult } from "../SearchResult";
import { SearchSummary } from "../SearchSummary";
import { Props } from './SearchInput.props';
import { styles } from "./SearchInput.styles";

const SearchInputFunc: FC<Props> = ({
    onChangeTotalVisibilityPos,
}) => {
    const [isDetailsOpened, setIsDetailsOpened] = useState(false);

    return (
        <Accordion
            containerStyle={styles.container}
            onChangeTotalVisibilityPos={onChangeTotalVisibilityPos}
            isDetailsOpened={isDetailsOpened}
            setIsDetailsOpened={setIsDetailsOpened}
            renderSummary={<SearchSummary isDetailsOpened={isDetailsOpened} setIsDetailsOpened={setIsDetailsOpened} />}
        >
            <View style={styles.results}>
                <SearchResult title='' subTitle='' />
            </View>
        </Accordion>
    );
};

export const SearchInput = memo(SearchInputFunc);