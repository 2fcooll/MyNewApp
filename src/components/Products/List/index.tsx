import React, { FC } from 'react'
import { Image, ScrollView, View } from 'react-native';
import { TouchableOpacityButton } from '../TouchableOpacityButton';
import {Props} from './List.props'
import { styles } from './List.styles';

const List: FC<Props> = ({hasBottomButton, ...props}) => {

    return (
        <View style={styles.wrapper}>
            <ScrollView {...props}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/images/car1.png')}
                />
            </ScrollView>
           <TouchableOpacityButton activeOpacity={1} icon="HeartOutline" />
        </View>
    )
};

export { List };