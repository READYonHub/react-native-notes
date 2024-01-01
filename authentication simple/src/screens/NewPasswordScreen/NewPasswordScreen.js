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

const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, SetNewPassword] = useState('');

    const { height } = useWindowDimensions(); //megkapja az aktualis telefon meretet

    const onSendPressed = () => {
        console.warn("onSendPressed") // felugrik egz figyelmeztetes a kepernyon
    }

    const onSubmitPress = () => {
        console.warn("onSubmitPress")
    }

    const onSignInPress = () => {
        console.warn("onSignInPress")
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
                    value={code}
                    setValue={setCode}
                />

                {/* CODE */}

                <CustomInput placeholder={"Enter your new password"}
                    value={newPassword}
                    setValue={SetNewPassword}
                />

                {/* REGISTER BUTTON */}

                <CustomButton text={"Send"}
                    onPress={onSendPressed}
                //type="PRIMARY"
                />

                <CustomButton text={"Submit"}
                    onPress={onSubmitPress}
                    type={"TERTIARY"}
                />

                <CustomButton text={"Back to Sign in"}
                    onPress={onSignInPress}
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