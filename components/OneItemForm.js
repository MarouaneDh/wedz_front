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
            <Text style={styles.label}>Item name</Text>
            <TextInput onChangeText={(e) => handleChange("item", e)} value={oneItems?.item} style={styles.input} />
            <View style={styles.numberInputsContainer}>
                <View>
                    <Text style={styles.label}>Number of items to buy</Text>
                    <TextInput keyboardType='number-pad' onChangeText={(e) => handleChange("numberOfItems", e)} value={`${oneItems?.numberOfItems}`} style={styles.input} />
                </View>
                <View>
                    <Text style={styles.label}>Number of items bought</Text>
                    <TextInput keyboardType='number-pad' onChangeText={(e) => handleChange("numberOfItemsBought", e)} value={`${oneItems?.numberOfItemsBought}`} style={styles.input} />
                </View>
            </View>
            <View style={styles.itemImages}>
                {
                    item.imageURLs.length !== 0 ?
                        item.imageURLs.map((img) => {
                            return (
                                <View>
                                    <Image key={Math.random()} style={styles.stretch} source={{ uri: img }} />
                                    <View style={styles.deletePicContainer}>
                                        <Image style={styles.stretchDelete} source={require('../assets/delete.png')} />
                                    </View>
                                </View>
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
        marginLeft: 15,
        borderBottomWidth: 0.5,
        marginRight: 35,
        paddingBottom: 15,
        borderColor: "#000000",
        marginBottom: 10
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#818181',
        padding: 10,
        width: "100%",
        borderRadius: 10,
        marginTop: 5,
        backgroundColor: '#c2c2c258',
        fontSize: 14,
        color: '#000',
    },
    label: {
        color: '#000',
        fontSize: 15
    },
    numberInputsContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        marginTop: 10,
    },
    itemImages: {
        display: 'flex',
        flexDirection: 'row',
    },
    stretch: {
        height: 65,
        width: 65,
        marginRight: 20,
        borderWidth: 1,
        borderColor: '#000',
        marginTop: 10,
        borderRadius: 5
    },
    stretchDelete: {
        height: 15,
        width: 15,
    },
    deletePicContainer: {
        backgroundColor: '#ebebeb',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#000',
        width: 22,
        height: 22,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 10,
        top: 2
    },
})