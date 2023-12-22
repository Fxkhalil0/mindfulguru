import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font'
import React, { useState } from "react";
import MyInput from '../Components/Input'
import Radio from '../Components/RadioButton'
import MyCheckBox from '../Components/MyCheckBox';
import { useNavigation } from '@react-navigation/native';
import DropdownComponent from '../Components/DropDown';


const { height } = Dimensions.get("window");

export default function SignUpScreen() {
    const navigation = useNavigation();
    const [loaded] = useFonts({
        'poppins-bold': require('../assets/poppins-bold.ttf'),
        'poppins-regular': require('../assets/poppins-regular.ttf'),
        'poppins-semibold': require('../assets/poppins-semibold.ttf'),
    });

    if (!loaded) {
        return null;
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.main__container}>
                    <View style={styles.text__container}>
                        <Text style={styles.first__text}>Create account</Text>
                    </View>
                    <View>
                        <MyInput placeholder='Enter your Name' textContentType="name" />
                        <MyInput placeholder='Enter your Email' textContentType="emailAddress" />
                        <MyInput placeholder='Enter your Phone' textContentType="telephoneNumber" />
                        <MyInput placeholder='Enter your Password' textContentType="password" />
                        <Text style={styles.question__style}>What is your gender?</Text>
                        < Radio />
                        <Text style={styles.question__style}>How did you hear about this?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <MyCheckBox label="LinkedIn" />
                            <MyCheckBox label="Friends" />
                            <MyCheckBox label="Job Portal" />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <MyCheckBox label="Other" />
                        </View>
                        <DropdownComponent />
                    </View>
                    <TouchableOpacity style={styles.sign__btn}
                    onPress={() => navigation.navigate("home")}
                    >
                        <Text style={styles.sign__btn__text}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("login")}
                        style={{
                            padding: 10,
                        }}
                    >
                        <Text style={styles.create__acc}>
                            Already have account?
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
    question__style: {
        fontFamily: 'poppins-bold',
        color: "#000",
        textAlign: "left",
        fontSize: 17,
        marginVertical: 5 * 2,
    },
});
