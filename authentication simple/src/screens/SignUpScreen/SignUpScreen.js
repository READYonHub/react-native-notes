import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton'
import {
    StyleSheet,
    View,
    Text,
    useWindowDimensions,
    ScrollView
} from 'react-native'
import SocialSignInButtons from '../../components/SocialSignInButtons'

import { useNavigation } from '@react-navigation/native'//hozzaferest nyerunk a navigation objektumhoz

import { useForm } from 'react-hook-form'

const SignUpScreen = () => {
    const { control, handleSubmit, watch } = useForm()
    const pwd = watch('password')
    //eltarolja az erteket

    const navigation = useNavigation(); //a navigation objektumhoz

    const { height } = useWindowDimensions(); //megkapja az aktualis telefon meretet

    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    {/* CONFITM EMAIL NAVIGATION */ }

    const onRegisterPressed = (data) => {
        //console.warn("Sign in") // felugrik egz figyelmeztetes a kepernyon

        navigation.navigate('ConfirmEmail')

        console.warn(data)
    }


    {/* CONFITM EMAIL NAVIGATION */ }

    const onSignInPress = () => {
        //console.warn("onSignInPress")

        navigation.navigate('SignIn')
    }

    const onTermOfUsePressed = () => {
        console.warn("onTermOfUsePressed")

        //ide kell valami majd
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

                <Text style={styles.title}>Create an account</Text>

                {/* USERNAME */}

                <CustomInput placeholder={"Username"}
                    name={'username'}
                    control={control}
                    rules={{
                        required: 'Username is required',
                        minLength: {
                            value: 4,
                            message: 'Username should be at least 4 characters long',
                        },
                        maxLength: {
                            value: 24,
                            message: 'Username should be maximum 24 characters long',
                        },
                    }}
                />

                {/* EMAIL */}

                <CustomInput placeholder={"Email"}
                    name={'email'}
                    control={control}
                    rules={{
                        required: 'Email is required',
                        pattern: {
                            value: EMAIL_REGEX,
                            message: 'Email is invalid',
                        },
                    }}
                />

                {/* PASSWORD */}

                <CustomInput
                    placeholder={"Password"}
                    name={'password'}
                    control={control}
                    secureTextEntry={true}
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
                />

                {/* REPEAT PASSWORD */}

                <CustomInput
                    placeholder={"Repeat Password"}
                    name={'repeat-password'}
                    control={control}
                    secureTextEntry={true}
                    rules={{
                        validate: value =>
                            value === pwd
                            ||
                            'Password do not match',
                    }}
                />

                {/* REGISTER BUTTON */}

                <CustomButton text={"Register"}
                    //web validacio eloszor
                    onPress={handleSubmit(onRegisterPressed)}
                //type="PRIMARY"
                />

                <Text style={styles.textPrivacy}>
                    By registering, you confirm that you accept our
                    <Text style={styles.linkPrivacy}
                        onPress={onTermOfUsePressed}
                    >
                        {' '}
                        Terms of Use
                    </Text>  and {' '}
                    <Text style={styles.linkPrivacy}
                        onPress={onTermOfUsePressed}
                    >
                        Privacy Policy
                    </Text>
                </Text>

                <SocialSignInButtons />

                <CustomButton text={"Have an account? Sign in"}
                    onPress={onSignInPress}
                    type={"TERTIARY"}
                />

            </View>
        </ScrollView >
    )
}

export default SignUpScreen

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