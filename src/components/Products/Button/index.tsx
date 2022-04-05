import React, { FC } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Props } from './Button.props'
import { Icon } from '../../Icon'
import { Colors } from '../../../styles/colors'
import { styles } from './Button.styles'
import { w } from '../../../styles/scale'


const Button: FC<Props> = ({ iconName, ...props }) => {
  return (
    <View>
      <TouchableOpacity {...props} style={styles.buttonLike}>
        <Icon name={iconName} color={Colors.WHITE_SMOKE} size={w(20.7)} />
      </TouchableOpacity>
    </View>
  )
}

export { Button }