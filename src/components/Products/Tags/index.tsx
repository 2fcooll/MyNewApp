import React, { FC } from 'react'
import { View } from 'react-native'
import { Price } from '../../Price'
import { List } from '../../List'
import { Tag } from '../../Tag'
import { Props } from './Tags.props'
import { styles } from './Tags.style'
import { Colors } from '../../../styles/colors'



const Tags: FC<Props> = ({
    data,
    hasPrice,
    horizontal,
    price,
    time
}) => {


    return (
        <View style={styles.wrapper}>
            <List horizontal={horizontal}>
                {data.map((tag, tagIndex) => {
                    let even = tagIndex % 2;
                    const containerStyle = !!even && !horizontal && {backgroundColor: Colors.MATTERHORN};
                    return <Tag
                    containerStyle = {containerStyle}
                    content={tag.content}
                    title={tag.title}
                    horizontal={horizontal} />
                }
                    
                )}
                {hasPrice &&
                    <Price
                        horizontal={horizontal}
                        price={price}
                        time={time}
                    />}
            </List>
        </View>
    )
}

export { Tags }