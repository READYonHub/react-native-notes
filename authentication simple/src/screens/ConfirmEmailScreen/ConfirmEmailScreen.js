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


const ConfirmEmailScreen = () => {

    const [code, setCode] = useState('');

    const navigation = useNavigation(); //a navigation objektumhoz

    {/* HOME SCREEN NAVIGATION */ }
    const onConfirmPressed = () => {
        //console.warn("onConfirmPressed") // felugrik egy figyelmeztetes a kepernyon

        navigation.navigate('Home')
    }


    {/* SIGN IN SCREEN NAVIGATION */ }

    const onSignInPress = () => {
        //console.warn("onSignInPress")

        navigation.navigate('SignIn')
    }

    const onResendPress = () => {
        console.warn("onResendPress")

        //ide kell majd valami validator
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

                <Text style={styles.title}>Confirm your email</Text>

                {/* CODE */}

                <CustomInput placeholder={"Enter Your confirmation code"}
                    value={code}
                    setValue={setCode}
                />

                {/* REGISTER BUTTON */}

                <CustomButton text={"Confirm"}
                    onPress={onConfirmPressed}
                //type="PRIMARY"
                />

                <CustomButton text={"Resend code"}
                    onPress={onResendPress}
                    type={"SECONDARY"}
                />

                <CustomButton text={"Back to Sign in"}
                    onPress={onSignInPress}
                    type={"TERTIARY"}
                />

            </View>
        </ScrollView>
    )
}

export default ConfirmEmailScreen

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