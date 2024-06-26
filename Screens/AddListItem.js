import React from 'react'

import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

import OneItemForm from '../components/OneItemForm';

const AddListItem = ({ setModalVisible, list }) => {
    const handleSaveChanges = () => {
        setModalVisible(false)
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Editing {list.listName} list</Text>
            </View>
            <ScrollView>
                {
                    list?.list?.map((item) => {
                        return (
                            <OneItemForm key={item._id} item={item} />
                        )
                    })
                }
            </ScrollView>
            <Pressable style={styles.editDeleteElement} onPress={handleSaveChanges}>
                <Image style={styles.stretch} source={require('../assets/save.png')} />
                <Text style={styles.save}>Save changes</Text>
            </Pressable>
        </View>
    )
}

export default AddListItem

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000',
        marginTop: 15
    },
    editDeleteElement: {
        backgroundColor: '#ebebeb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        borderTopColor: '#000',
        borderTopWidth: 1,
    },
    save: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000',
    },
    stretch: {
        height: 25,
        width: 25,
        marginRight: 20
    },
})