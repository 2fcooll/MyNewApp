import React, { FC } from 'react'
import { List } from '../List'
import { Props } from './ImageCarousel.props'

const ImageCarousel: FC<Props> = ({ hasBottomButton }) => {
    return (
        <List horizontal={true} hasBottomButton={hasBottomButton}/>
    )
}

export { ImageCarousel }