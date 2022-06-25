import React, { FC, memo, useState } from "react";
import { Accordion } from "../Accordion";
import { CategoriesSummary } from "../CategoriesSummary";
import { OneCategory } from "../OneCategory";
import { Props } from './Categories.props';
import { styles } from "./Categories.styles";

const CategoriesFunc: FC<Props> = ({
    onChangeTotalVisibilityPos,
}) => {
    const [isDetailsOpened, setIsDetailsOpened] = useState(false);

    return (
        <Accordion
            isDetailsOpened={isDetailsOpened}
            setIsDetailsOpened={setIsDetailsOpened}
            renderSummary={<CategoriesSummary isDetailsOpened={isDetailsOpened} />}
            containerStyle={styles.container}
            detailsStyle={styles.details}
            onChangeTotalVisibilityPos={onChangeTotalVisibilityPos}
        >
            <OneCategory subCategories={[{}, {}, {}]} />
        </Accordion>
    );
};

export const Categories = memo(CategoriesFunc);