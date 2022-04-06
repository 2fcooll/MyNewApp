import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { styles } from './Tag.style'
import { Props } from './Tag.props'


const Tag:FC<Props> = ({innerText, containerStyleWrapper, containerStyleText}) => {
  
  return (
    <View style={containerStyleWrapper}>
      <Text style={containerStyleText}>{innerText}</Text>
    </View>
  )
}

export {Tag}