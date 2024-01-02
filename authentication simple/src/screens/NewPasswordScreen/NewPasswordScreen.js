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


const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, SetNewPassword] = useState('');

    const navigation = useNavigation(); //a navigation objektumhoz



    {/* SEND BUTTON*/ }
    const onSubmitPressed = () => {
        //console.warn("onSubmitPress")

        navigation.navigate('Home')
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
                    value={code}
                    setValue={setCode}
                />

                {/* CODE */}

                <CustomInput placeholder={"Enter your new password"}
                    value={newPassword}
                    setValue={SetNewPassword}
                />

                <CustomButton text={"Submit"}
                    onPress={onSubmitPressed}
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