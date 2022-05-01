import React, { FC, useMemo } from 'react'
import { Text, View } from 'react-native'
import { styles } from './Tag.style'
import { Props } from './Tag.props'

const Tag: FC<Props> = ({ content, title, horizontal, containerStyle, titleStyle, onTitleLayout, ...props }) => {
  
  const cashedContainerStyles = useMemo(() => [horizontal ? styles.wrapperHorizontal : styles.wrapperVertical, containerStyle], [containerStyle])
  const cashedTitleStyles = useMemo(() => [horizontal ? styles.textTitleHorizontal : styles.textTitleVertical, titleStyle], [titleStyle]);
  const cashedTextContentStyles = useMemo(() => [horizontal ? styles.textContentHorizontal : styles.textContentVertical], []);
  
  return (
    <View {...props} style={cashedContainerStyles}>
      {!!title && <Text onLayout={onTitleLayout} style={cashedTitleStyles}>{title}</Text>} 
      {!!content && <Text style={cashedTextContentStyles}>{content}</Text>}
    </View>
  );
}

export { Tag }