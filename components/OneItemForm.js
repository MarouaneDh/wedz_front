import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'

const OneItemForm = ({ item }) => {
    const [oneItems, setOneItems] = useState(item)

    const handleChange = (name, e) => {
        setOneItems((prevState) => {
            if (name === 'numberOfItems' || name === 'numberOfItemsBought') {
                return {
                    ...prevState,
                    [name]: +e
                }
            } else {
                return {
                    ...prevState,
                    [name]: e
                }
            }
        })
    }

    return (
        <View style={styles.itemContainer}>
            <Text>Item name</Text>
            <TextInput onChangeText={(e) => handleChange("item", e)} value={oneItems?.item} style={styles.input} />
            <View style={styles.numberInputsContainer}>
                <View>
                    <Text>Number of items to buy</Text>
                    <TextInput keyboardType='number-pad' onChangeText={(e) => handleChange("numberOfItems", e)} value={`${oneItems?.numberOfItems}`} style={styles.input} />
                </View>
                <View>
                    <Text>Number of items bought</Text>
                    <TextInput keyboardType='number-pad' onChangeText={(e) => handleChange("numberOfItemsBought", e)} value={`${oneItems?.numberOfItemsBought}`} style={styles.input} />
                </View>
            </View>
            <View style={styles.itemImages}>
                {
                    item.imageURLs.length !== 0 ?
                        item.imageURLs.map((img) => {
                            return (
                                <Image key={Math.random()} style={styles.stretch} source={{ uri: img }} />
                            )
                        }) : <Text>No image</Text>
                }
            </View>
        </View>
    )
}

export default OneItemForm

const styles = StyleSheet.create({
    itemContainer: {
        marginTop: 10,
        marginLeft: 15
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#818181',
        padding: 10,
        width: "80%",
        borderRadius: 10,
        marginTop: 5,
        backgroundColor: '#c2c2c258',
        fontSize: 14,
        color: '#000',
    },
    numberInputsContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        marginTop: 10,
        borderBottomWidth: 0.5,
        marginRight: 15,
        paddingBottom: 15,
        borderColor: "#000000"
    },
    itemImages: {
        display: 'flex',
        flexDirection: 'row',

    },
    stretch: {
        height: 50,
        width: 50,
        marginRight: 20
    },
})