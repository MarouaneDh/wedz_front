import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Pressable } from 'react-native';

import { listData } from '../constants/staticData';
import { ScrollView } from 'react-native-gesture-handler';
import OneListItem from '../components/OneListItem';

const OneList = ({ route }) => {
    const [data, setData] = useState(null)
    const listId = route.params.listId

    const getList = () => {
        setData(listData[0])
    }

    useEffect(() => {
        if (listId) {
            getList()
        }
    }, [listId])

    return (
        data && <SafeAreaView style={styles.container}>
            <Text style={styles.title}> {data.listName} list</Text>
            <ScrollView style={styles.list}>
                <Pressable style={styles.item} onPress={() => console.log('')}>
                    <Image style={styles.stretch} source={require('../assets/add.png')} />
                    <Text>Add a new item</Text>
                </Pressable>
                {
                    data.list.map((item) => {
                        return (
                            <OneListItem listItem={item} key={item._id} />
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight || 0,
        backgroundColor: 'black',
    },
    title: {
        color: 'white',
        alignSelf: 'center',
        marginBottom: 40,
        fontSize: 20,
        fontWeight: '700'
    },
    list: {
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 10
    },
    item: {
        backgroundColor: '#ebebeb',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderRadius: 25
    },
    stretch: {
        height: 50,
        width: 50,
        marginRight: 20
    },
})

export default OneList