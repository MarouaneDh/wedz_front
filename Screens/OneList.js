import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { Text, StyleSheet, SafeAreaView, Image, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import OneListItem from '../components/OneListItem';

import { getOneList } from '../redux/slices/list/listAsyncThunk';
import { resetOneListData } from '../redux/slices/list/listSlice';
import globalStyle from '../styles/styles';

const OneList = ({ route }) => {
    const dispatch = useDispatch()

    const { list } = useSelector((state) => state.lists.oneList)
    const listId = route.params.listId

    const getList = () => {
        dispatch(getOneList(listId))
    }

    useEffect(() => {
        if (listId) {
            getList()
        }
    }, [listId])

    useEffect(() => () => dispatch(resetOneListData()), []);

    return (
        list?.list && <SafeAreaView style={globalStyle.container}>
            <Text style={styles.title}>{list?.listName} ({list?.stat}%)</Text>
            <ScrollView style={styles.list}>
                <Pressable style={styles.item} onPress={() => console.log('')}>
                    <Image style={styles.stretch} source={require('../assets/add.png')} />
                    <Text>Add a new item</Text>
                </Pressable>
                {
                    list?.list?.map((item) => {
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
    title: {
        color: 'white',
        alignSelf: 'center',
        marginBottom: 40,
        marginTop: 20,
        fontSize: 25,
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