import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Text, StyleSheet, SafeAreaView, Image, Pressable, Modal, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import OneListItem from '../components/OneListItem';

import { getOneList } from '../redux/slices/list/listAsyncThunk';
import { resetOneListData } from '../redux/slices/list/listSlice';
import globalStyle from '../styles/styles';
import RefreshWrapper from '../helpers/RefreshWrapper';
import AddListItem from './AddListItem';

const OneList = ({ route }) => {
    const dispatch = useDispatch()

    const [modalVisible, setModalVisible] = useState(false);

    const { list } = useSelector((state) => state.lists.oneList)
    const listId = route.params.listId

    useEffect(() => {
        if (listId) {
            dispatch(getOneList(listId))
        }
    }, [listId, dispatch])

    useEffect(() => () => dispatch(resetOneListData()), []);

    return (
        <RefreshWrapper onRefresh={() => dispatch(getOneList(listId))}>
            {list?.list && <SafeAreaView style={globalStyle.container}>
                <Text style={styles.title}>{list?.listName} ({list?.stat}%)</Text>
                <ScrollView style={styles.list}>
                    <Pressable style={styles.item} onPress={() => setModalVisible(true)}>
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
                <Modal
                    animationType="slide"
                    visible={modalVisible}>
                    <AddListItem list={list} setModalVisible={setModalVisible} />
                </Modal>
            </SafeAreaView>}
        </RefreshWrapper>
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