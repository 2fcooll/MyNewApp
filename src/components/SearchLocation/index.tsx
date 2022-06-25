import React, { FC, memo, useState } from "react";
import { Accordion } from "../Accordion";
import { SearchLocationSummary } from "../SearchLocationSummary";
import { SearchResult } from "../SearchResult";
import { Props } from './SearchLocation.props';
import { styles } from './SearchLocation.styles';

const SearchLocationFunc: FC<Props> = ({
    onChangeTotalVisibilityPos,
}) => {
    const [isDetailsOpened, setIsDetailsOpened] = useState(false);

    return (
        <Accordion
            isDetailsOpened={isDetailsOpened}
            setIsDetailsOpened={setIsDetailsOpened}
            renderSummary={<SearchLocationSummary isDetailsOpened={isDetailsOpened} />}
            containerStyle={styles.container}
            onChangeTotalVisibilityPos={onChangeTotalVisibilityPos}
            detailsStyle={styles.detailsContainer}
        >
            <SearchResult title='Донецкая область' subTitle='132 обьявления' />
            <SearchResult title='Донецкая область' subTitle='132 обьявления' />
            <SearchResult title='Донецкая область' subTitle='132 обьявления' />
            <SearchResult title='Донецкая область' subTitle='132 обьявления' />
        </Accordion>
    );
};

export const SearchLocation = memo(SearchLocationFunc);