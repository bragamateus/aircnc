import React from 'react';
import {KeyboardAvoidingView, View, 
    Image, Text, TextInput, 
    StyleSheet, TouchableOpacity } from 'react-native';

import logo from '../assets/logo.png';
import { Platform } from '@unimodules/core';

export default function Login(){
    return(
    
    <KeyboardAvoidingView
        behavior="padding"
        enabled={Platform.OS === 'android'}
        style={styles.container}
    >
        <Image source={logo} />

        <View style={styles.form}>

            <Text style={styles.label}>SEU EMAIL *</Text>
            <TextInput 
                style={styles.input}
                placeholder="Seu e-mail"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <Text style={styles.label}>TECNOLOGIAS *</Text>
            <TextInput 
                style={styles.input}
                placeholder="Tecnologias de interesse"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} >Encontrar spots</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
    
    ) 
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'

    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});