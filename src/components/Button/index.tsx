import React, { FC, memo, useMemo } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { Props } from './Button.props'
import { Icon } from '../Icon'

const ButtonFunc: FC<Props> = ({ 
  iconName,
  iconColor, 
  iconSize,
  innerText, 
  containerStyle,
  containerStyleText,
  rightIconName,
  rightIconColor,
  rightIconSize,
  rightIconContainerStyle,
  ...props
}) => {
  const hasIcon = iconName && iconColor && iconSize;
  const hasRightIcon = rightIconName && rightIconColor && rightIconSize;
  const hitSlop = useMemo(() => ({ top: 10, bottom: 10, left: 10, right: 10 }), []);
    
  return (
    <TouchableOpacity hitSlop={hitSlop} {...props} activeOpacity={1} style={containerStyle}>
      {!!hasIcon && <Icon name={iconName} color={iconColor} size={iconSize} />}
      {!!innerText && <Text style={containerStyleText}>{innerText}</Text>}
      {!!hasRightIcon && <View style={rightIconContainerStyle}><Icon name={rightIconName} color={rightIconColor} size={rightIconSize} /></View>}
    </TouchableOpacity>
  );
}

export const Button = memo(ButtonFunc);