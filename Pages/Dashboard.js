import React, { useState } from 'react';

import {
    SafeAreaView,
    View,
    StyleSheet,
    StatusBar,
    ScrollView,
    Text,
} from 'react-native';

import ListItem from '../components/ListItem';
import { listData } from '../constants/staticData';

const Dashboard = ({ route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Your List</Text>
            <ScrollView>
                <View style={styles.list}>
                    {
                        listData.map((item) => {
                            return (
                                <ListItem listId={item._id} listName={item.listName} listCategory={item.listCategory} key={item._id} />
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
        paddingHorizontal: 8,
    },
    title: {
        color: 'white',
        alignSelf: 'center',
        marginBottom: 20,
        fontSize: 20,
        fontWeight: '700'
    },
    list: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginBottom: 50
    }
})

export default Dashboard