import React, { FC } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { Icon } from '../../Icon'
import { Props } from './ButtonPrice.props'
import { styles } from './ButtonPrice.style'


const ButtonPrice: FC<Props> = ({ 
    horizontal,
    price,
    time, 
    iconName, 
    iconColor, 
    iconSize,
    ...props }) => {
    
    return (
        <View>
            {horizontal ?
                <TouchableOpacity {...props} style={styles.wrapperHorizontal}>
                    <Icon name={iconName} color={iconColor} size={iconSize} />
                    <Text style={styles.textPriceHorizontal}>{price}</Text>
                </TouchableOpacity> :
                <TouchableOpacity {...props} style={styles.wrapperVertical}>
                    <Text style={styles.textTimeVertical} >{time}</Text>
                    <Text style={styles.textPriceVertical} >{price}</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

export { ButtonPrice }