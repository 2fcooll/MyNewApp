import React, { FC, memo, useState } from "react";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";
import { Accordion } from "../Accordion";
import { CategoriesSummary } from "../CategoriesSummary";
import { Checkbox } from "../Checkbox";
import { Props } from './OneCategory.props';
import { styles } from "./OneCategory.styles";

const OneCategoryFunc: FC<Props> = ({
    subCategories,
}) => {
    const [isDetailsOpened, setIsDetailsOpened] = useState(false);
    const hasSubCategories = !!subCategories?.length;

    const renderSummary = () => {
        return (
            <Checkbox />
        );
    };

    if (!hasSubCategories) {
        return (
            <CategoriesSummary 
                hasRightIcon={hasSubCategories} 
                renderSummary={renderSummary} 
                isDetailsOpened={isDetailsOpened} 
                containerStyle={styles.summaryContainer}
                hasPaddingAnimation={false}
            />
        );
    }

    return (
        <Accordion
            isDetailsOpened={isDetailsOpened}
            setIsDetailsOpened={setIsDetailsOpened}
            renderSummary={
                <CategoriesSummary 
                    hasPaddingAnimation={false} 
                    containerStyle={styles.summaryContainer} 
                    rightIconSize={w(20)} 
                    rightIconColor={Colors.SILVER_CHALICE} 
                    renderSummary={renderSummary} 
                    isDetailsOpened={isDetailsOpened} 
                />
            }
        >
            {subCategories?.map((subCategory, subCategoryIndex) => {
                return (
                    <Checkbox 
                        containerStyle={styles.subCategoryCheckbox} 
                        titleStyle={styles.subCategoryTitle} 
                        key={subCategoryIndex} 
                        iconSize={w(17)}
                        wrapperStyle={styles.subCategoryCheckboxWrapper}
                    />
                );
            })}
        </Accordion>
    )
};

export const OneCategory = memo(OneCategoryFunc);