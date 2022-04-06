import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { styles } from './Tag.style'
import { Props } from './Tag.props'


const Tag: FC<Props> = ({ content, title }) => {

  return (
    <View style={styles.wrapper}>
      {title && <Text style={styles.textTitle}>{title}</Text>} 
      <Text style={styles.textContent}>{content}</Text>
    </View>
  )
}

export { Tag }