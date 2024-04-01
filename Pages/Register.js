import { useEffect, useState } from 'react';
import { useToast } from "react-native-toast-notifications";

import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

const Register = ({ route }) => {
    const toast = useToast();
    // const { param1, param2 } = route.params || {};
    const [registerationData, setRegisterationData] = useState({
        role: 'husband',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        partner: ''
    })
    const [confirmPass, setConfirmPass] = useState('')
    const [passCheck, setPassCheck] = useState(false)

    const inputChangeHandler = (e, name) => {
        setRegisterationData((initialState) => (
            {
                ...initialState,
                [name]: e
            }
        ))
    }

    const showToast = (type, message) => {
        toast.show(message, {
            type: type,
            placement: "bottom",
            duration: 3000,
            offset: 30,
            animationType: "slide-in",
        });
    }

    const checkPassHandler = () => {
        setPassCheck(confirmPass === registerationData.password)
    }

    const allFullFields = registerationData.email !== '' &&
        registerationData.firstName !== '' &&
        registerationData.lastName !== '' &&
        registerationData.password !== '' &&
        registerationData.role !== ''

    const registerPressHandler = () => {
        if (confirmPass !== '' && !passCheck) {
            showToast('danger', 'Passwords do not match')
        }
        if (allFullFields) {
            if (confirmPass !== '' && passCheck) {
                showToast('success', 'Registrared successfully')
            }
        }
    }

    useEffect(() => {
        checkPassHandler()
    }, [confirmPass, registerationData.password])

    return (
        <ScrollView style={styles.registrationContainer}>
            <View style={styles.inputContainer}>
                <View style={styles.oneInput}>
                    <Text style={styles.text}>First name</Text>
                    <TextInput
                        placeholderTextColor='#919191'
                        placeholder="Type your first name"
                        style={styles.input}
                        textContentType='givenName'
                        onChangeText={(e) => inputChangeHandler(e, 'firstName')}
                        value={registerationData.firstName}
                    />
                </View>
                <View style={styles.oneInput}>
                    <Text style={styles.text}>Last name</Text>
                    <TextInput
                        placeholderTextColor='#919191'
                        placeholder="Type your last name"
                        style={styles.input}
                        textContentType='familyName'
                        onChangeText={(e) => inputChangeHandler(e, 'lastName')}
                        value={registerationData.lastName}
                    />
                </View>
                <View style={styles.oneInput}>
                    <Text style={styles.text}>Email</Text>
                    <TextInput
                        placeholderTextColor='#919191'
                        placeholder="Type your email"
                        style={styles.input}
                        textContentType='emailAddress'
                        keyboardType='email-address'
                        onChangeText={(e) => inputChangeHandler(e, 'email')}
                        value={registerationData.email}
                    />
                </View>
                <View style={styles.oneInput}>
                    <Text style={styles.text}>Password</Text>
                    <TextInput
                        placeholderTextColor='#919191'
                        placeholder="Type your password"
                        style={styles.input}
                        textContentType='password'
                        secureTextEntry
                        onChangeText={(e) => inputChangeHandler(e, 'password')}
                        value={registerationData.password}
                    />
                </View>
                <View style={styles.oneInput}>
                    <Text style={styles.text}>Confirm your password</Text>
                    <TextInput
                        placeholderTextColor='#919191'
                        placeholder="Type your password again"
                        style={styles.input}
                        textContentType='password'
                        secureTextEntry
                        onChangeText={setConfirmPass}
                    />
                </View>
                <View style={styles.oneInput}>
                    <Text style={styles.text}>Phone number</Text>
                    <TextInput
                        placeholderTextColor='#919191'
                        placeholder="Type your phone number"
                        style={styles.input}
                        textContentType='telephoneNumber'
                        keyboardType='number-pad'
                        onChangeText={(e) => inputChangeHandler(e, 'phoneNumber')}
                        value={registerationData.phoneNumber}
                    />
                </View>
                <Pressable style={styles.button} onPress={registerPressHandler}>
                    <Text style={styles.buttonText}>Register</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    registrationContainer: {
        backgroundColor: '#50006496',
        height: '100%',
    },
    inputContainer: {
        width: "100%",
        paddingLeft: 30
    },
    oneInput: {
        marginTop: 5,
        marginBottom: 20,
        zIndex: 0
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#c2c2c2',
        padding: 10,
        width: "90%",
        borderRadius: 10,
        marginTop: 3,
        backgroundColor: '#8702a875',
        fontSize: 14,
        color: '#fff',
    },
    text: {
        color: '#fff',
        fontWeight: '600'
    },
    button: {
        backgroundColor: '#8702a8',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 10,
        width: '90%',
        marginBottom: 20
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '800'
    }
});

export default Register