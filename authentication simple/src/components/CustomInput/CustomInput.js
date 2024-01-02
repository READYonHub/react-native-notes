import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';

const CustomInput = ({
    control,
    name,
    rules = {},
    placeholder,
    secureTextEntry,
}) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (

                <>
                    <View
                        style={[
                            styles.container,
                            {/*  ha hiba van akkor a szovegdoboz pirosra valt*/ },
                            { borderColor: error ? 'red' : '#e8e8e8' },
                        ]}>
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            style={styles.input}
                            secureTextEntry={secureTextEntry}
                        />
                    </View>
                    {error && (
                        <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>
                        //ha error van, vagyis nincs kitoltve valamelyik mezo, akkor Text kerul kiiratasra
                    )}
                </>

            )}
        />
    );
};

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
})