import React, { FC } from 'react'
import { Image, View } from 'react-native'
import { Button } from '../Button'
import { List } from '../List'
import { Props } from './ImageCarousel.props'


const ImageCarousel: FC<Props> = ({ hasBottomButton }) => {
    return (
        <View>
            <List horizontal={true}/>
            {hasBottomButton && <Button activeOpacity={1} iconName="HeartOutline" />}
        </View>
    )
}

export { ImageCarousel }