import React, { useState } from 'react'
import Logo from
    '../../../assets/images/veszet_macsek.jpg'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from
    '../../components/CustomButton/CustomButton'
import {
    StyleSheet,
    View,
    Image,
    useWindowDimensions,
    ScrollView,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'//hozzaferest nyerunk a navigation objektumhoz

import { useForm, Controller } from 'react-hook-form'

const SignInScreen = () => {

    {/*
    const [useName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    */}

    const { height } = useWindowDimensions(); //megkapja az aktualis telefon meretet

    const navigation = useNavigation(); //a navigation objektumhoz

    const { control, handleSubmit, formState: { errors }, } = useForm();

    //rules errorokat iratja ki
    console.log(errors)

    {/* SIGN IN NAVIGATION */ }

    const onSignInPressed = (data) => {
        //console.warn("Sign in") // felugrik egz figyelmeztetes a kepernyon
        //felhasznalo hitelesites

        navigation.navigate('Home')

        console.log(data)
    }

    {/* ONFORGOT PASSWORD NAVIGATION */ }

    const onForgotPasswordPressed = () => {
        //console.warn("Forgot Password") // felugrik egz figyelmeztetes a kepernyon

        navigation.navigate('ForgotPassword')
    }

    const onSignInFacebook = () => {
        console.warn("Sign In with Facebook")
    }

    const onSignInGoogle = () => {
        console.warn("Sign In with Google")
    }

    const onSignInApple = () => {
        console.warn("Sign In with Apple")
    }

    const onSignUpPress = () => {
        //console.warn("Don't have an account? Create one")

        navigation.navigate('SignUp')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* a ScrollView azert kell, mert kisebb eszkozon
            lehet nem fer el az osszes componens
            es ezert gorgethetove kell tenni*/}
            <View style={styles.screen}>
                <Image source={Logo}
                    style={[styles.logo,
                    { height: height * 0.3 }]}
                    resizeMode='contain'
                />

                <CustomInput placeholder={"Username"}
                    name={"username"}
                    control={control}
                    //kerjen valamit nem lehet null ertek
                    rules={{
                         required: 'Username is required',
                         minLength: {
                            value: 4,
                            message: 'Password should be minimum 4 characters long',
                        }, }}
                />

                <CustomInput placeholder={"Password"}
                    name={"Password"}
                    control={control}
                    secureTextEntry={true}
                    //kerjen valamit nem lehet null ertek
                    //tobb konyvtar https://react-hook-form.com/get-started#Registerfields#Applyvalidation
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password should be minimum 8 characters long',
                        },
                    }}
                />

                {/*
                <Controller
                    control={control}
                    name='username'
                    render={({ field: { value, onChange, onBlur } }) =>
                    <TextInput
                            placeholder={'username'}
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            />
                        }
                        />
                    */}

                {/* a handlerSubmit fogja eloszor validalni a mezoket */}
                <CustomButton text={"Sign in"}
                    onPress={handleSubmit(onSignInPressed)}
                //type="PRIMARY"
                />

                <CustomButton text={"Forgot Password"}
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />

                {/* Social mediak */}

                <CustomButton text={"Sign In with Facebook"}
                    onPress={onSignInFacebook}
                    bgColor={"#E7EAF4"}
                    fgColor={"#4765A9"}
                />

                <CustomButton text={"Sign In with Google"}
                    onPress={onSignInGoogle}
                    bgColor={"#FAE9EA"}
                    fgColor={"#DD4D44"}
                />

                <CustomButton text={"Sign In with Apple"}
                    onPress={onSignInApple}
                    bgColor={"#E3E3E3"}
                    fgColor={"#363636"}
                />

                <CustomButton text={"Don't have an account? Create one"}
                    onPress={onSignUpPress}
                    type={"TERTIARY"}
                />

            </View>
        </ScrollView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300, //ha mas eszkozon nyitjak meg ne toltse ki a teljes kerpernyot csak ennyit maximum
        height: '70%',
        maxHeight: 200,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    }
})