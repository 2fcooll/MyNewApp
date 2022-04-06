import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { Props } from './Button.props'
import { Icon } from '../../Icon'

const Button: FC<Props> = ({ 
  iconName,
  iconColor, 
  iconSize, 
  containerStyle,
  children, 
  ...props }) => {

  return (
    <TouchableOpacity {...props} style={containerStyle}>
      {children}
    </TouchableOpacity>
  )
}

export { Button }