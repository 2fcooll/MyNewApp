import React, { FC } from 'react'
import { View } from 'react-native'
import { Price } from '../Price'
import { List } from '../List'
import { Tag } from '../Tag'
import { Props } from './Tags.props'
import { styles } from './Tags.style'



const Tags: FC<Props> = ({ hasPrice, horizontal }) => {
    return (
        <View style={styles.wrapper}>
            {!!horizontal ?
                <List horizontal>
                    <Tag content='nvidia gtx 1650' />
                    <Tag content='intel i5' />
                    {hasPrice && 
                    <Price
                        horizontal
                        price="21 000 $"
                        activeOpacity={1}
                    />}
                </List> :
                <List>
                    <Tag title='Видеокарта' content='nvidia gtx 1650' />
                    <Tag title='Процессор' content='intel i5' />
                    {hasPrice && 
                    <Price
                        activeOpacity={1}
                        time='Сегодня в 12:30'
                        price="21 000 $" 
                    />}
                </List>}
        </View>
    )
}

export { Tags }