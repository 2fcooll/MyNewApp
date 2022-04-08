import React, { FC, useMemo } from 'react'
import { Text, View } from 'react-native'
import { styles } from './Tag.style'
import { Props } from './Tag.props'


const Tag: FC<Props> = ({ content, title, horizontal, containerStyle }) => {
  
  const cashedContainerStyles = useMemo(() => [styles.wrapper, containerStyle], [containerStyle])
  
  return (
    <View 
    style={cashedContainerStyles}>
      {!horizontal && <Text style={styles.textTitle}>{title}</Text>} 
      <Text style={styles.textContent}>{content}</Text>
    </View>
  )
}

export { Tag }