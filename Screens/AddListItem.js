import React from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import OneItemForm from '../components/OneItemForm';

const AddListItem = ({ setModalVisible, list }) => {
    return (
        <View>
            <View>
                <Text>Adding new item to {list.listName} list</Text>
                <Pressable onPress={() => setModalVisible(false)}>
                    <Text>Close</Text>
                </Pressable>
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
        </View>
    )
}

export default AddListItem

const styles = StyleSheet.create({})