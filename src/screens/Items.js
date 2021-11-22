import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { RemoveItem } from '../redux/Slice'

const Items = (props) => {

    const dispatch = useDispatch()

    function deleteItem() {
        dispatch(RemoveItem(props.index))
    }

    return (
        <View style={[style.text]}>
            <Text style={[style.items]}> {props.data} </Text>
            <TouchableOpacity>
                <Text style={[style.close]} onPress={deleteItem}>X</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    items: {
        color: 'white',
        fontSize: 20,
        maxWidth: '85%',
        textAlign: 'justify'
    },
    close: {
        fontSize: 20,
        color: 'red',
        backgroundColor: 'white',
        height: 40,
        width: 40,
        padding: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 10,
        marginVertical: 10
    },
    text: {
        padding: 5,
        paddingVertical:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 1,
        elevation: 4,
        backgroundColor: '#aaa0',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 1,
    }
})

export default Items
