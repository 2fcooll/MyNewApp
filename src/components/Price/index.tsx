import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { Colors } from '../../styles/colors'
import { Button } from '../Button'
import { Props } from './Price.props'
import { styles } from './Price.style'


const Price:FC<Props> = ({ 
    horizontal,
    price,
    time,}) => {
        
    return (
        <View>
            {horizontal ?
                <Button 
                    containerStyle={styles.wrapperHorizontal} 
                    iconName='ArrowDownCircleOutline' 
                    iconColor={Colors.MATTERHORN} 
                    iconSize={16}
                    containerStyleText={styles.textPriceHorizontal}
                    price={price}
                >
                    {/* <Icon name='ArrowDownCircleOutline' color={Colors.MATTERHORN} size={16} /> */}
                    {/* <Text style={styles.textPriceHorizontal}>{price}</Text> */}
                </Button> :
                <View style={styles.wrapperVertical}>
                    <Text style={styles.textTimeVertical} >{time}</Text>
                    <Text style={styles.textPriceVertical} >{price}</Text>
                </View>
            }
        </View>
    )
}

export { Price }