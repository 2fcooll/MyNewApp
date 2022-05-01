import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { Colors } from '../../styles/colors'
import { w } from '../../styles/scale'
import { Button } from '../Button'
import { Props } from './Price.props'
import { styles } from './Price.style'

const Price: FC<Props> = ({ 
    horizontal,
    price,
    time,
    containerStyle,
}) => {
    return (
        <View style={containerStyle}>
            {horizontal ? (
                <Button 
                    containerStyle={styles.wrapperHorizontal} 
                    iconName='ArrowDownCircleOutline' 
                    iconColor={Colors.EMPEROR} 
                    iconSize={w(16)}
                    containerStyleText={styles.textPriceHorizontal}
                    innerText={price}
                />
            ) : (
                <View style={styles.wrapperVertical}>
                    <Text style={styles.textTimeVertical}>{time}</Text>
                    <Text style={styles.textPriceVertical}>{price}</Text>
                </View>
            )}
        </View>
    );
}

export { Price }