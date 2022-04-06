import React, { FC } from 'react'
import { View } from 'react-native'
import { Colors } from '../../../styles/colors'
import { Tag } from '../Tag'
import { styles } from './Tags.style'


const Tags:FC = () => {
    return (
        <View style={styles.wrapper}>
                <Tag 
                    containerStyleWrapper={styles.wrapperTag}
                    containerStyleText={styles.innerText}
                    innerText='nvidia gtx 1650'
                />
        </View>
    )
}

export { Tags }