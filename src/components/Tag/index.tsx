import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { styles } from './Tag.style'
import { Props } from './Tag.props'


const Tag: FC<Props> = ({ content, title, horizontal, backgroundColor }) => {

  console.log(backgroundColor);
  

  return (
    <View style={[styles.wrapper, {backgroundColor: `${backgroundColor}`} ]}>
      {!horizontal && <Text style={styles.textTitle}>{title}</Text>} 
      <Text style={styles.textContent}>{content}</Text>
    </View>
  )
}

export { Tag }