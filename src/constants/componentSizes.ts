import { w } from "../styles/scale";

export const COMPONENT_SIZES = {
    PROFILE: {
        HEADER: {
            IMAGE: {
                START_WIDTH: w(124),
                START_HEIGHT: w(124),
                END_WIDTH: w(65),
                END_HEIGHT: w(65),
            },
            NAME: {
                START_FONT_SIZE: w(30),
                END_FONT_SIZE: w(24),
            },
        },
    },
    TAB_BAR: {
        BOTTOM_OFFSET: w(8),
    },
    SEARCH: {
        INPUT_CONTAINER: {
            START_PADDING_VERTICAL: 0,
            END_PADDING_VERTICAL: w(12),
        },
        INPUT: {
            TRANSLATE_X: w(60),
        },
    },
    CATEGORIES_SUMMARY: {
        START_PADDING_TOP: w(14),
        END_PADDING_TOP: w(22),

        START_PADDING_BOTTOM: w(14),
        END_PADDING_BOTTOM: w(22),

        START_PADDING_LEFT: w(22),
        END_PADDING_LEFT: w(27),
    },
};