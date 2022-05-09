import React, { FC, useMemo } from "react";
import { View } from "react-native";
import { Props } from "./Icon.props";
import { styles } from "./Icon.styles";

const ExportedIcons = {
    SettingsOutline: require('../../assets/icons/SettingsOutline.svg').default,
    EditOutline: require('../../assets/icons/EditOutline.svg').default,
    RatingOutline: require('../../assets/icons/RatingOutline.svg').default,
    PauseOutline: require('../../assets/icons/PauseOutline.svg').default,
    DeleteOutline: require('../../assets/icons/DeleteOutline.svg').default,
    PlayOutline: require('../../assets/icons/PlayOutline.svg').default,
    Eye: require('../../assets/icons/Eye.svg').default,
    Chart: require('../../assets/icons/Chart.svg').default,
    Heart: require('../../assets/icons/Heart.svg').default,
    HeartOutline: require('../../assets/icons/HeartOutline.svg').default,
    ArrowDownCircleOutline: require('../../assets/icons/ArrowDownCircleOutline.svg').default,
    ProfileOutline: require('../../assets/icons/ProfileOutline.svg').default,
    FilterOutline: require('../../assets/icons/FilterOutline.svg').default,
    Star: require('../../assets/icons/Star.svg').default,
    CopyOutline: require('../../assets/icons/CopyOutline.svg').default,
    ArrowDown: require('../../assets/icons/ArrowDown.svg').default,
    PaperPlus: require('../../assets/icons/PaperPlus.svg').default,
    EditSquareOutline: require('../../assets/icons/EditSquareOutline.svg').default,
    ExitOutline: require('../../assets/icons/ExitOutline.svg').default,
    StarOutline: require('../../assets/icons/StarOutline.svg').default,
    Image: require('../../assets/icons/Image.svg').default,
    SearchOutline: require('../../assets/icons/SearchOutline.svg').default,
    CheckMarkCircleOutline: require('../../assets/icons/CheckMarkCircleOutline.svg').default,
    LocationOutline: require('../../assets/icons/LocationOutline.svg').default,
    PlusSquareOutline: require('../../assets/icons/PlusSquareOutline.svg').default,
    DangerCircleOutline: require('../../assets/icons/DangerCircleOutline.svg').default,
    PhoneOutline: require('../../assets/icons/PhoneOutline.svg').default,
    ArrowLeftCircleOutline: require('../../assets/icons/ArrowLeftCircleOutline.svg').default,
};

const Icon: FC<Props> = ({ name, color, size, stroke }) => {

    const IconComponent = useMemo(() => ExportedIcons[name], [name]);

    return (
        <View style={styles.container}>
            <IconComponent fill={color} width={size} height={size} stroke={stroke} />
        </View>
    );
};

export { Icon };