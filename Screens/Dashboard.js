import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';

import {
    SafeAreaView,
    View,
    StyleSheet,
    ScrollView,
    Text,
    Pressable,
    Image,
} from 'react-native';

import ListItem from '../components/ListItem';
import { listData } from '../constants/staticData';
import { logout } from '../redux/slices/auth/authSlice';
import { getAllLists } from '../redux/slices/list/listAsyncThunk';

import globalStyle from '../styles/styles';

const Dashboard = ({ route }) => {
    const dispatch = useDispatch()
    const toast = useToast();
    const navigation = useNavigation()

    const lists = useSelector((state) => state.lists.lists)

    const toAddNewList = () => {
        navigation.navigate('AddNewList')
    }

    const logoutUser = () => {
        dispatch(logout())
        setTimeout(() => {
            toast.show("Logged out successfully", {
                type: "success",
                placement: "bottom",
                duration: 3000,
                offset: 30,
                animationType: "slide-in",
            });
        }, 1000);
    }

    useEffect(() => {
        dispatch(getAllLists())
    }, [dispatch])

    console.log(lists?.lists)

    return (
        <SafeAreaView style={globalStyle.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Your List</Text>
                <Text onPress={() => logoutUser()} style={styles.title}>logout</Text>
            </View>
            <ScrollView>
                <View style={styles.list}>
                    <Pressable onPress={() => toAddNewList()} style={styles.item}>
                        <Image style={styles.stretch} source={require('../assets/add.png')} />
                        <Text style={styles.add}>Add new list</Text>
                    </Pressable>
                    {
                        lists?.lists?.map((item) => {
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
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
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
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 6,
        flexGrow: 1,
        flexBasis: 164,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    stretch: {
        height: 50,
        resizeMode: 'center',
    },
    title: {
        fontSize: 18,
        color: 'white'
    },
    add: {
        fontSize: 18,
        color: 'black'
    },
})

export default Dashboard