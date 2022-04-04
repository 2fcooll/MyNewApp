import React, { FC } from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { Colors } from '../../../styles/colors'
import { w } from '../../../styles/scale'
import { Icon } from '../../Icon'
import { Props } from './ImageCarousel.props'
import { styles } from './ImageCarousel.styles'

const ImageCarousel: FC<Props> = ({ hasBottomButton }) => {
    return (
        <View style={styles.wrapper}>
            <ScrollView horizontal >
                <View style={styles.wrapperImage}>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/images/car1.png')}
                    />
                    {hasBottomButton && 
                    <TouchableOpacity style={styles.buttonLike}>
                        <Icon name='HeartOutline' color={Colors.WHITE_SMOKE} size={w(20.7)} />
                    </TouchableOpacity>}
                </View>
            </ScrollView>
        </View>
    )
}

export { ImageCarousel }