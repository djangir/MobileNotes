import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'

const Login = (props) => {
    const [text, setText] = useState('Full Name')
    const image = { uri: "https://drainage.pca.state.mn.us/images/6/6a/Blank-Notepad-Pencil-Pen.png" };

    return (
        <View style={[style.space]}>
            <ImageBackground source={image} style={{ flex: 1 }}>
                <View style={[style.shadow]}>
                    <View style={{ alignItems: 'center', margin: 10, marginTop: 50 }}>
                        <Image source={{ uri: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png' }} style={[style.circle]} />
                    </View>
                    <TextInput style={[style.box]} placeholder='Enter Your Name' maxLength={25} value={text} onChangeText={(e) => setText(e)} />
                    <TouchableOpacity style={[style.center, { width: '100%' }]}>
                        <Text style={[style.btn]} onPress={() => (text.replace(/\s/g, "").length > 0) ? props.navigation.navigate('Home', { name: text }) : alert('Enter Name')}> Go </Text>
                    </TouchableOpacity>
                </View >
            </ImageBackground>
        </View>
    )
}

const style = StyleSheet.create({
    box: {
        borderWidth: 1,
        marginVertical: 20,
        marginHorizontal: 10,
        borderRadius: 5,
        borderBottomWidth: 2,
        borderColor: 'silver',
        backgroundColor: 'white'
    },
    btn: {
        color: 'white',
        backgroundColor: '#484d5f',
        textAlign: 'center',
        width: '60%',
        padding: 10,
        marginVertical: 20,
        fontSize: 20,
        borderRadius: 150,
        borderColor: 'silver',
        borderWidth: .5,
        borderBottomWidth: 1
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    space: {
        flex: 1,
        backgroundColor: '#484d5b'
    },

    circle: {
        height: 150,
        width: 150,
        borderRadius: 150,
    },
    shadow: {
        backgroundColor: '#00a9',
        flex: 1,
    }
})

export default Login
