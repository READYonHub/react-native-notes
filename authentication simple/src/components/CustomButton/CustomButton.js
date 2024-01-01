import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({
    onPress,
    text,
    type = "PRIMARY",
    bgColor,
    fgColor }) => {
    //ha nem kapja meg a type-ot akkor alapertelmezetten PRIMARY lesz

    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? { backgroundColor: bgColor } : {}
            ]}
        >
            {/* a megkapott tipus szerinti stilust valasztja ki */}
            <Text
                style={[styles.text,
                styles[`text_${type}`],
                fgColor ? { color: fgColor } : {}
                ]}
            >
                {text}
            </Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: '3%',
        alignItems: 'center',
        borderRadius: 5,
    },
    container_PRIMARY: {
        backgroundColor: '#3B71F3',
    },
    container_SECONDARY: {
        borderColor: "#38B71F3",
        borderWidth: 3,
    },
    container_TERTIARY: {
        backgroundColor: '#e8ebed'
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_SECONDARY: {
        color: "#3B71F3",
    },
    text_TERTIARY: {
        color: 'gray',
    },
})