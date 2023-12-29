import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const CustomInput = ({
    value,
    setValue,
    placeholder,
    secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                style={styles.input} />
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