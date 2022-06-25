import React, { FC, memo } from 'react'
import { Image, View } from 'react-native'
import { Colors } from '../../styles/colors'
import { Button } from '../Button'
import { List } from '../List'
import { Props } from './ImageCarousel.props'
import { styles } from './ImageCarousel.styles'
import { w } from '../../styles/scale'

const ImageCarouselFunc: FC<Props> = ({ hasBottomButton, images }) => {
    return (
        <View>
            <List contentContainerStyle={styles.contentContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                {images.map((image, imageIndex) => {
                    const source = image || { uri: image };

                    return (
                        <Image
                            key={`${image}-${imageIndex}`}
                            style={[styles.image, imageIndex === 0 && styles.firstImage]}
                            source={image}
                            resizeMode='cover'
                        />
                    );
                })}
            </List>
            {hasBottomButton && (
                <Button 
                    containerStyle={styles.buttonLike}
                    iconName="HeartOutline"
                    iconColor={Colors.WHITE_SMOKE}
                    iconSize={w(20.7)}
                />
            )}
        </View >
    );
}

export const ImageCarousel = memo(ImageCarouselFunc);