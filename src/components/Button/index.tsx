import React, { FC, useMemo } from 'react'
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
  rightIconName,
  rightIconColor,
  rightIconSize,
  ...props
}) => {

  const hasIcon = iconName && iconColor && iconSize;
  const hasRightIcon = rightIconName && rightIconColor && rightIconSize;
  const hitSlop = useMemo(() => ({ top: 10, bottom: 10, left: 10, right: 10 }), []);
    
  return (
    <TouchableOpacity hitSlop={hitSlop} {...props} activeOpacity={1} style={containerStyle}>
      {!!hasIcon && <Icon name={iconName} color={iconColor} size={iconSize} />}
      {!!innerText && <Text style={containerStyleText}>{innerText}</Text>}
      {!!hasRightIcon && <Icon name={rightIconName} color={rightIconColor} size={rightIconSize} />}
    </TouchableOpacity>
  );
}

export { Button }