import React, { FC } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Props } from './TouchableOpacityButton.props'
import { Icon } from '../../Icon'
import { Colors } from '../../../styles/colors'
import { styles } from './TouchableOpacityButton.styles'
import { w } from '../../../styles/scale'
w


const TouchableOpacityButton: FC<Props> = ({ icon, ...props }) => {
  return (
    <View>
      <TouchableOpacity {...props} style={styles.buttonLike}>
        <Icon name={icon} color={Colors.WHITE_SMOKE} size={w(20.7)} />
      </TouchableOpacity>
    </View>
  )
}

export { TouchableOpacityButton }