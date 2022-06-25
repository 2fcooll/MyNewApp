import { FC, memo, useMemo } from "react";
import { Image, Text, View } from "react-native";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";
import { Icon } from "../Icon";
import { Props } from "./ProfileHeader.props";
import { styles } from "./ProfileHeader.styles";

const ProfileHeaderFunc: FC<Props> = () => {
    const imageSource = useMemo(() => ({ uri: '' }), []);
    
    return (
        <View style={styles.container}>
            <Image source={imageSource} />
            <View>
                <Text>Jack Snow</Text>
                <Text>Украина, Донецк</Text>
            </View>
            <View>
                <Icon name='Star' color={Colors.ORANGE} size={w(20)} />
                <Text>4.5</Text>
            </View>
        </View>
    );
};

export const ProfileHeader = memo(ProfileHeaderFunc);