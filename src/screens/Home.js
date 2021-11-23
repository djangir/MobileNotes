import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, RefreshControl } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Items from './Items'
import { addItem, deleteItems } from '../redux/Slice'

const Home = (paras) => {
    const [inputText, setInputText] = useState(paras.route.params.name)
    const [inputText1, setInputText1] = useState(`${Math.floor(Math.random() * 5) + 22}`)
    const [refreshing, setRefreshing] = React.useState(false);
    const dataValue = useSelector(state => state.value)
    const dispatch = useDispatch()
    const image = { uri: "https://drainage.pca.state.mn.us/images/6/6a/Blank-Notepad-Pencil-Pen.png" };

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        dispatch(deleteItems())
        setInputText(paras.route.params.name)
        setInputText1(`${Math.floor(Math.random() * 5) + 22}`)
        wait(500).then(() => setRefreshing(false));
    }, []);

    function saveData() {
        (inputText.replace(/\s/g, "") !== '' && inputText1.replace(/\s/g, "") !== '') ?
            (dispatch(addItem({ item: inputText, data: inputText1 })),
                setInputText(''),
                setInputText1('')) :
            alert('Empty Item')
    }

    return (
        <View style={[style.space]}>

            <ImageBackground source={image} style={{ flex: 1 }}>
                <View style={[style.shadow]}>
                    <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 15 }}> Welcome </Text>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}> {paras.route.params.name} </Text>
                    </View>
                    <TextInput multiline maxLength={50} style={[style.box]} placeholder='Name' onChangeText={text => setInputText(text)} value={inputText} />
                    <TextInput multiline maxLength={50} keyboardType='phone-pad' style={[style.box]} placeholder='Age' onChangeText={text => setInputText1(text)} value={inputText1} />
                    <TouchableOpacity style={[style.center, { width: '100%' }]} onPress={saveData}>
                        <Text style={[style.btn]} > Add </Text>
                    </TouchableOpacity>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 10, paddingBottom: 10 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

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
        maxHeight: '30%',
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