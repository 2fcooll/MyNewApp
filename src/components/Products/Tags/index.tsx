import React, { FC } from 'react'
import { View } from 'react-native'
import { Colors } from '../../../styles/colors'
import { Button } from '../Button'
import { ButtonPrice } from '../ButtonPrice'
import { List } from '../List'
import { Tag } from '../Tag'
import { Props } from './Tags.props'
import { styles } from './Tags.style'



const Tags: FC<Props> = ({ hasPrice, horizontal }) => {
    return (
        <View style={styles.wrapper}>
            {horizontal ?
                <List horizontal>
                    <Tag innerText='nvidia gtx 1650' />
                    <Tag innerText='intel i5' />
                    {hasPrice && 
                    <ButtonPrice
                        horizontal
                        price="21 000 $"
                        activeOpacity={1}
                        iconName="ArrowDownCircleOutline"
                        iconColor={Colors.MATTERHORN}
                        iconSize={16} 
                    />}
                </List> :
                <List>
                    <Tag title='Видеокарта' innerText='nvidia gtx 1650' />
                    <Tag title='Процессор' innerText='intel i5' />
                    {hasPrice && 
                    <ButtonPrice
                        activeOpacity={1}
                        time='Сегодня в 12:30'
                        price="21 000 $" 
                    />}
                </List>}
        </View>
    )
}

export { Tags }