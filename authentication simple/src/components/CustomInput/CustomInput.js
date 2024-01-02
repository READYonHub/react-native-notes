import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Controller } from 'react-hook-form'

const CustomInput = ({
    control,
    name,
    placeholder,
    secureTextEntry }) => {
    return (
        <View style={styles.container}>
            {/* Sablonbol maradt */}
            {/*
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                style={styles.input}
            />
            */}

            <Controller
                control={control}
                name={name}
                render={({ field: { value, onChange, onBlur } }) =>
                    <TextInput
                        placeholder={placeholder}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        style={styles.input}
                        secureTextEntry={secureTextEntry}
                    />
                }
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        padding: "3%",

        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 10,
    },
    input: {},
})