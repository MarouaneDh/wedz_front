import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"

import { Dropdown } from 'react-native-element-dropdown';

import CustomInput from "../components/CustomInput"
import { useState } from "react";

const AddNewList = () => {
    const data = [
        { label: 'Kitchen', value: 'kitchen' },
        { label: 'Bathroom', value: 'bathroom' },
        { label: 'Living Room', value: 'livingroom' },
        { label: 'Bedroom', value: 'bedroom' },
        { label: 'Toilet', value: 'toilet' },
    ];
    const [value, setValue] = useState(null);

    const oneItem = (item) => {
        const assetMap = {
            kitchen: require('../assets/kitchen.png'),
            bedroom: require('../assets/bedroom.png'),
            bathroom: require('../assets/bathroom.png'),
            livingroom: require('../assets/livingroom.png'),
            toilet: require('../assets/toilet.png'),
        };

        const imageSource = assetMap[item.value] || require('../assets/default.png');
        return (
            <View style={styles.oneItem}>
                <Image style={styles.stretch} source={imageSource} />
                <Text>{item.label}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <CustomInput
                name="listName"
                label="List Name"
                placeholder="Type the name of your list"
            />
            <Text style={styles.label}>Select a category</Text>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                placeholder="Select a category"
                data={data}
                maxHeight={250}
                labelField="label"
                valueField="value"
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
                renderItem={oneItem}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight || 0,
        backgroundColor: 'black',
        paddingHorizontal: 20,
    },
    dropdown: {
        height: 50,
        borderWidth: 1,
        borderColor: '#c2c2c2',
        padding: 10,
        width: "100%",
        borderRadius: 10,
        marginTop: 3,
        backgroundColor: '#00000075',
        fontSize: 14,
        color: '#fff',
    },
    stretch: {
        height: 50,
        width: 50,
        marginRight: 15
    },
    oneItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    label: {
        color: '#fff',
        fontWeight: '600',
        marginTop: 30,
    },
    placeholderStyle: {
        fontSize: 16,
        color: "#919191"
    },
    selectedTextStyle: {
        fontSize: 16,
        color: "#fff"
    },
})

export default AddNewList