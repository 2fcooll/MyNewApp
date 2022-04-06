import React, { FC } from 'react'
import { ScrollView, View } from 'react-native';
import { Props } from './List.props'
import { styles } from './List.styles';

const List: FC<Props> = ({children, ...props }) => {

    return (
        <View style={styles.wrapper}>
            <ScrollView {...props}>
                {children}
            </ScrollView>
        </View>
    )
};

export { List };