import React from 'react'
import { View } from 'react-native'
import { ActivityIndicator, Colors } from 'react-native-paper';

const Loading = () => {
    return (
        <>
            <View style={{
                // backgroundColor: 'pink',
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
            }}>
                <ActivityIndicator animating={true} size={'large'} color={'#6C70F4'} />
            </View>
        </>
    )
}

export default Loading
