import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image } from 'react-native';

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
                <View>
                    {
                        data.list.map((item) => {
                            return (
                                <OneListItem listItem={item} key={item._id} />
                            )
                        })
                    }
                </View>
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
    }
})

export default OneList