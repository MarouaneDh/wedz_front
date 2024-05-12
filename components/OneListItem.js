import React from 'react'
import { Image, Pressable, StyleSheet, Text } from 'react-native';

const OneListItem = ({ listItem }) => {

    return (
        <Pressable style={styles.item} onPress={() => console.log('')}>
            <Image style={styles.stretch} source={require('../assets/default-image.png')} />
            <Text>{listItem.want}</Text>
            <Text>{
                listItem.isBought ? " was bought" : " not yet bought"
            }</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#ebebeb',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 25
    },
    title: {
        fontSize: 18,
        color: 'black'
    },
    stretch: {
        height: 50,
        width: 50,
        marginRight: 20
    },
})

export default OneListItem