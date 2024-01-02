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

import { useNavigation } from '@react-navigation/native'//hozzaferest nyerunk a navigation objektumhoz


const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');

    const navigation = useNavigation(); //a navigation objektumhoz


    const { height } = useWindowDimensions(); //megkapja az aktualis telefon meretet

    {/* SEND BUTTON*/ }

    const onSendPressed = () => {
        //console.warn("onSendPressed") // felugrik egz figyelmeztetes a kepernyon

        navigation.navigate('NewPassword')
    }

    const onSignInPress = () => {
       // console.warn("onSignInPress")

       navigation.navigate('SignIn')
    }

    const onResendPress = () => {
        console.warn("onResendPress")
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

                <CustomInput placeholder={"Username"}
                    value={username}
                    setValue={setUsername}
                />

                {/* REGISTER BUTTON */}

                <CustomButton text={"Send"}
                    onPress={onSendPressed}
                //type="PRIMARY"
                />

                <CustomButton text={"Back to Sign in"}
                    onPress={onSignInPress}
                    type={"TERTIARY"}
                />

            </View>
        </ScrollView>
    )
}

export default ForgotPasswordScreen

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