import React, { FC } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Props } from './Button.props'
import { Icon } from '../../Icon'

const Button: FC<Props> = ({ 
  iconName,
  iconColor, 
  iconSize,
  price, 
  containerStyle,
  containerStyleText}) => {

  return (
    <TouchableOpacity activeOpacity={1} style={containerStyle}>
      <Icon name={iconName} color={iconColor} size={iconSize} />
      {price && <Text style={containerStyleText}>{price}</Text>}
    </TouchableOpacity>
  )
}

export { Button }