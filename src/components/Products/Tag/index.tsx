import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { styles } from './Tag.style'
import { Props } from './Tag.props'


const Tag: FC<Props> = ({ innerText, title }) => {

  return (
    <View style={styles.wrapper}>
      {title ?
        <View style={styles.wrapperVertical}>
          <Text style={styles.innerTextVertical}>{title}</Text>  
          <Text style={styles.innerTextVertical}>{innerText}</Text>
        </View> :
        <Text style={styles.innerTextHorizontal}>{innerText}</Text>}
    </View>
  )
}

export { Tag }