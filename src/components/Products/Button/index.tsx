import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { Props } from './Button.props'
import { Icon } from '../../Icon'
import { w } from '../../../styles/scale'


const Button: FC<Props> = ({ 
  iconName,
  iconColor, 
  iconSize, 
  containerStyle, 
  ...props }) => {

  return (
    <TouchableOpacity {...props} style={containerStyle}>
      <Icon name={iconName} color={iconColor} size={w(iconSize)} />
    </TouchableOpacity>
  )
}

export { Button }