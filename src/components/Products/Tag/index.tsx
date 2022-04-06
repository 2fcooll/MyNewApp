import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { styles } from './Tag.style'
import { Props } from './Tag.props'


const Tag: FC<Props> = ({ content, title }) => {

  return (
    <View style={styles.wrapper}>
      {!!title ?
        <View style={styles.wrapperVertical}>
          <Text style={styles.innerTextVertical}>{title}</Text>  
          <Text style={styles.innerTextVertical}>{content}</Text>
        </View> :
        <Text style={styles.innerTextHorizontal}>{content}</Text>}
    </View>
  )
}

export { Tag }