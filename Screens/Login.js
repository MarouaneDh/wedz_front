import React, { useState } from 'react'
import { useToast } from 'react-native-toast-notifications';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../redux/slices/auth/authAsyncThunk';

import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

const Login = () => {
    const toast = useToast();
    const dispatch = useDispatch();

    const auth = useSelector((state) => state.auth.auth);

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const allFullFields = loginData.email !== '' &&
        loginData.password !== ''

    const inputChangeHandler = (e, name) => {
        setLoginData((initialState) => (
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

    const loginPressHandler = () => {
        dispatch(login({ email: "marouanedhambri@gmail.com", password: "12345678Aa*" }))
        // if (allFullFields) {
        //     showToast('success', 'Login successfully')
        // } else {
        //     showToast('danger', 'Login failed')
        // }
    }

    console.log(auth)

    return (
        <View style={styles.loginContainer}>
            <View style={styles.inputContainer}>
                <View style={styles.oneInput}>
                    <Text style={styles.text}>First name</Text>
                    <TextInput
                        placeholderTextColor='#919191'
                        placeholder="Type your first name"
                        style={styles.input}
                        textContentType='givenName'
                        onChangeText={(e) => inputChangeHandler(e, 'firstName')}
                        value={loginData.email}
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
                        value={loginData.password}
                    />
                </View>
                <Pressable style={styles.button} onPress={loginPressHandler}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    loginContainer: {
        backgroundColor: '#50006496',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-evenly'
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
        marginTop: 20
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '800'
    }
});