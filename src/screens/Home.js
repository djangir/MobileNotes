import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Items from './Items'
import { addItem } from '../redux/Slice'

const Home = (paras) => {
    const [inputText, setInputText] = useState('')
    const dataValue = useSelector(state => state.value)

    const dispatch = useDispatch()

    const image = { uri: "https://drainage.pca.state.mn.us/images/6/6a/Blank-Notepad-Pencil-Pen.png" };


    function saveData() {
        (inputText.replace(/\s/g,"") !== '') ?
            (dispatch(addItem(inputText)),
                setInputText('')) :
            alert('Empty')

    }

    return (
        <View style={[style.space]}>

            <ImageBackground source={image} style={{ flex: 1 }}>
                <View style={[style.shadow]}>

                    <View style={{ flexDirection:'row', marginTop: 15, justifyContent:'center'}}>
                        <Text style={{color: 'white', textAlign:'center', fontSize: 15}}> Welcome </Text>
                        
                        <Text style={{color: 'white', textAlign:'center', fontSize: 18}}> {paras.route.params.name} </Text>
                    </View>

                    <TextInput multiline style={[style.box]} placeholder='Items' onChangeText={text => setInputText(text)} value={inputText} />
                    <TouchableOpacity style={[style.center, { width: '100%' }]} onPress={saveData}>
                        <Text style={[style.btn]} > Add </Text>
                    </TouchableOpacity>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            dataValue.map((item, index) => {
                                return (
                                    <Items data={item} index={index} key={index} />
                                )
                            })
                        }

                    </ScrollView >
                </View >
            </ImageBackground>
        </View >

    )
}

const style = StyleSheet.create({
    box: {
        borderWidth: 1,
        marginHorizontal: 10,
        marginTop: 20,
        maxHeight: '75%',
        borderRadius: 5,
        borderBottomWidth: 2,
        borderColor: 'silver',
        backgroundColor: '#ffffffd9',
        color: 'black'
    },
    btn: {
        color: 'white',
        backgroundColor: '#484d5f99',
        textAlign: 'center',
        width: '90%',
        padding: 10,
        marginVertical: 15,
        fontSize: 20,
        borderRadius: 250,
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
        backgroundColor: '#484d5b',
        color: 'white'
    },
    shadow: {
        backgroundColor: '#00a9',
        flex: 1,
    }
})

export default Home
