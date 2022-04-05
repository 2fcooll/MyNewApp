import React, { FC } from 'react'
import { Image, ScrollView, View } from 'react-native';
import { Button } from '../Button';
import {Props} from './List.props'
import { styles } from './List.styles';

const List: FC<Props> = ({...props}) => {
    
    console.log(props);
    

    return (
        <View style={styles.wrapper}>
            <ScrollView {...props}>
            <Image
                style={styles.image}
                source={require('../../../assets/images/car1.png')}
            />
            </ScrollView>
        </View>
    )
};

export { List };