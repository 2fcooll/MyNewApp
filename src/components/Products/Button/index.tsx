import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { Props } from './Button.props'
import { Icon } from '../../Icon'

const Button: FC<Props> = ({ 
  iconName,
  iconColor, 
  iconSize, 
  containerStyle, 
  ...props }) => {

  return (
    <TouchableOpacity {...props} style={containerStyle}>
      <Icon name={iconName} color={iconColor} size={iconSize} />
    </TouchableOpacity>
  )
}

export { Button }