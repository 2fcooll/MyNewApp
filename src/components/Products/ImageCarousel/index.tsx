import React, { FC } from 'react'
import { Image, ScrollView, View } from 'react-native'
import { Colors } from '../../../styles/colors'
import { Button } from '../Button'
import { List } from '../List'
import { Props } from './ImageCarousel.props'
import { styles } from './ImageCarousel.styles'



const ImageCarousel: FC<Props> = ({ hasBottomButton }) => {

    return (
        <View>
            <List horizontal={true}>
                <Image
                    source={require('../../../assets/images/car1.png')}
                />
                <Image
                    source={require('../../../assets/images/car1.png')}
                />
            </List>
            {hasBottomButton &&
                <Button
                    containerStyle={styles.buttonLike}
                    activeOpacity={1}
                    iconName="HeartOutline"
                    iconColor={Colors.WHITE_SMOKE}
                    iconSize={20.7} />
            }
        </View >
    )
}

export { ImageCarousel }