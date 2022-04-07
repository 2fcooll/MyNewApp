import React, { FC } from 'react'
import { Image, View } from 'react-native'
import { Colors } from '../../../styles/colors'
import { Icon } from '../../Icon'
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
                    iconName="HeartOutline"
                    iconColor={Colors.WHITE_SMOKE}
                    iconSize={20.7}
                    >
                </Button>
            }
        </View >
    )
}

export { ImageCarousel }