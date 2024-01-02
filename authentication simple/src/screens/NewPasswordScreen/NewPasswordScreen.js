import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton'
import {
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native'
import { useNavigation } from '@react-navigation/native'//hozzaferest nyerunk a navigation objektumhoz
import { useForm } from 'react-hook-form'

const NewPasswordScreen = () => {

    const { control, handleSubmit } = useForm()

    const navigation = useNavigation(); //a navigation objektumhoz



    {/* SEND BUTTON*/ }
    const onSubmitPressed = (data) => {
        //console.warn("onSubmitPress")

        navigation.navigate('Home')

        console.warn(data)
    }


    {/* BACK TO SIGN IN BUTTON*/ }
    const onSignInPressed = () => {
        //console.warn("onSignInPress")

        navigation.navigate('SignIn')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* a ScrollView azert kell, mert kisebb eszkozon
            lehet nem fer el az osszes componens
            es ezert gorgethetove kell tenni*/}
            <View style={styles.screen}>
                {/* Logo helye
                <Image source={Logo}
                    style={[styles.logo,
                    { height: height * 0.3 }]}
                    resizeMode='contain'
                />
            */}

                <Text style={styles.title}>Reset your password</Text>

                {/* CODE */}

                <CustomInput placeholder={"Code"}
                    name={'code'}
                    control={control}
                    rules={{
                        required: 'Code is required',
                        minLength: {
                            value: 4,
                            message: 'Code is not correct',
                        },
                        maxLength: {
                            value: 4,
                            message: 'Code is not correct',
                        }
                    }}
                />

                {/* CODE */}

                <CustomInput placeholder={"Enter your new password"}
                    name={'password'}
                    control={control}
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password should be at least 8 characters long',
                        },
                        maxLength: {
                            value: 48,
                            message: 'Password should be maximum 48 characters long',
                        },
                    }}
                    secureTextEntry
                />

                <CustomButton text={"Submit"}
                    onPress={handleSubmit(onSubmitPressed)}
                    type={"TERTIARY"}
                />

                <CustomButton text={"Back to Sign in"}
                    onPress={onSignInPressed}
                    type={"TERTIARY"}
                />

            </View>
        </ScrollView>
    )
}

export default NewPasswordScreen

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    textPrivacy: {
        color: 'gray',
        marginVertical: 10,
    },
    linkPrivacy: {
        color: '#FDB075',
    }
})