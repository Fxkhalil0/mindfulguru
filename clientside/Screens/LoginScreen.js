import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { useFonts } from 'expo-font'
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';




const { height } = Dimensions.get("window");

export default function LoginScreen() {
    const navigation = useNavigation();
    const [focused, setFocused] = useState(false);
    const [loaded] = useFonts({
        'poppins-bold': require('../assets/poppins-bold.ttf'),
        'poppins-regular': require('../assets/poppins-regular.ttf'),
        'poppins-semibold': require('../assets/poppins-semibold.ttf'),
    });

    if (!loaded) {
        return null;
    }
    return (
        <SafeAreaView>
            <View style={styles.main__container}>
                <View style={styles.text__container}>
                    <Text style={styles.first__text}>Login Here</Text>
                    <Text style={styles.sec__text}>Welcome back you've been missed!</Text>
                </View>
                <View>
                    <TextInput
                        placeholder='Enter your email'
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        placeholderTextColor={"#626262"}
                        style={[
                            styles.textInput,
                            focused && styles.textInputFocused,
                        ]}
                    />
                    <TextInput
                        placeholder='Enter your password'
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        placeholderTextColor={"#626262"}
                        style={[
                            styles.textInput,
                            focused && styles.textInputFocused,
                        ]}
                    />
                </View>
                <View>
                    <Text style={styles.forget__pass}>
                        Forgot your password ?
                    </Text>
                </View>

                <TouchableOpacity style={styles.sign__btn}
                    onPress={() => navigation.navigate("home")}
                >
                    <Text style={styles.sign__btn__text}>
                        Sign in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("signup")}
                    style={{
                        padding: 10,
                    }}
                >
                    <Text style={styles.create__acc}>
                        Create new account
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main__container: {
        padding: 10 * 4,
    },
    text__container: {
        alignItems: "center",
    },
    first__text: {
        fontSize: 35,
        color: '#407BFF',
        fontFamily: 'poppins-bold',
        marginTop: 10 * 5,
        marginBottom: 5 * 3,
    },
    sec__text: {
        fontFamily: 'poppins-semibold',
        fontSize: 20,
        textAlign: "center"
    },
    textInput: {
        fontFamily: 'poppins-regular',
        fontSize: 15,
        padding: 10 * 2,
        backgroundColor: "#f1f4ff",
        borderRadius: 10,
        marginTop: 30,
    },
    textInputFocused: {
        borderWidth: 3,
        borderColor: "#407BFF",
        shadowOffset: { width: 4, height: 10 },
        shadowColor: "#407BFF",
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    forget__pass: {
        fontFamily: 'poppins-semibold',
        fontSize: 13,
        color: "#407BFF",
        alignSelf: "flex-end",
        marginTop: 15,
    },
    sign__btn: {
        padding: 10 * 2,
        backgroundColor: "#407BFF",
        marginVertical: 10 * 3,
        borderRadius: 10,
        shadowColor: "#407BFF",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    sign__btn__text: {
        fontFamily: 'poppins-bold',
        color: "#fff",
        textAlign: "center",
        fontSize: 17,
    },
    create__acc: {
        fontFamily: 'poppins-semibold',
        color: "#000",
        textAlign: "center",
        fontSize: 15,
    },
});
