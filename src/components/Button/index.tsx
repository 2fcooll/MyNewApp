import React, { FC } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Props } from './Button.props'
import { Icon } from '../Icon'

const Button: FC<Props> = ({ 
  iconName,
  iconColor, 
  iconSize,
  innerText, 
  containerStyle,
  containerStyleText,
  ...props}) => {

  const hasIcon = iconName && iconColor && iconSize;
    

  return (
    <TouchableOpacity {...props} activeOpacity={1} style={containerStyle}>
      {!!hasIcon && <Icon name={iconName} color={iconColor} size={iconSize} />}
      {!!innerText && <Text style={containerStyleText}>{innerText}</Text>}
    </TouchableOpacity>
  )
}

export { Button }