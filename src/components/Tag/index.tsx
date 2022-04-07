import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { styles } from './Tag.style'
import { Props } from './Tag.props'


const Tag: FC<Props> = ({ content, title, horizontal }) => {

  return (
    <View style={styles.wrapper}>
      {!horizontal && <Text style={styles.textTitle}>{title}</Text>} 
      <Text style={styles.textContent}>{content}</Text>
    </View>
  )
}

export { Tag }