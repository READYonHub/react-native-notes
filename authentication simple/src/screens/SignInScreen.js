import React, { useState } from 'react'
import Logo from '../../assets/images/veszet_macsek.jpg'
import CustomInput from '../components/CustomInput/CustomInput'
import CustomButton from '../components/CustomInput/CustomButton'
import {
    StyleSheet,
    View,
    Image,
    useWindowDimensions,
    ScrollView
} from 'react-native'

const SignInScreen = () => {
    const [useName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions(); //megkapja az aktualis telefon meretet

    const onSignInPressed = () => {
        console.warn("Sign in") // felugrik egz figyelmeztetes a kepernyon
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password") // felugrik egz figyelmeztetes a kepernyon
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
        console.warn("Don't have an account? Create one")
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
                    value={useName}
                    setValue={setUserName} />
                <CustomInput
                    placeholder={"Password"}
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />
                <CustomButton text={"Sign in"}
                    onPress={onSignInPressed}
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
    }
})