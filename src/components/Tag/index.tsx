import React, { FC, memo } from 'react'
import { Text, View } from 'react-native'
import { styles } from './Tag.style'
import { Props } from './Tag.props'

const TagFunc: FC<Props> = ({ content, title, horizontal, containerStyle, titleStyle, onTitleLayout, ...props }) => {
  return (
    <View {...props} style={[horizontal ? styles.wrapperHorizontal : styles.wrapperVertical, containerStyle]}>
      {!!title && <Text onLayout={onTitleLayout} style={[horizontal ? styles.textTitleHorizontal : styles.textTitleVertical, titleStyle]}>{title}</Text>} 
      {!!content && <Text style={[horizontal ? styles.textContentHorizontal : styles.textContentVertical]}>{content}</Text>}
    </View>
  );
}

export const Tag = memo(TagFunc);