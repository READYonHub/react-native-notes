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


const SignUpScreen = () => {
    const [useName, setUserName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [passwordRepet, setPasswordRepet] = useState('');

    const navigation = useNavigation(); //a navigation objektumhoz

    const { height } = useWindowDimensions(); //megkapja az aktualis telefon meretet


    {/* CONFITM EMAIL NAVIGATION */ }

    const onRegisterPressed = () => {
        //console.warn("Sign in") // felugrik egz figyelmeztetes a kepernyon

        navigation.navigate('ConfirmEmail')
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
                    value={useName}
                    setValue={setUserName}
                />

                {/* EMAIL */}

                <CustomInput placeholder={"Email"}
                    value={email}
                    setValue={setEmail}
                />

                {/* PASSWORD */}

                <CustomInput
                    placeholder={"Password"}
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />

                {/* REPEAT PASSWORD */}

                <CustomInput
                    placeholder={"Repeat Password"}
                    value={passwordRepet}
                    setValue={setPasswordRepet}
                    secureTextEntry={true}
                />

                {/* REGISTER BUTTON */}

                <CustomButton text={"Register"}
                    onPress={onRegisterPressed}
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