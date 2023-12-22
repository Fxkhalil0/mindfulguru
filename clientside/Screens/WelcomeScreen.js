import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import FK from '../assets/FK.jpg';
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native';


const { height } = Dimensions.get("window");

export default function WelcomeScreen() {
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
        <SafeAreaView>
            <View>
                <ImageBackground
                    style={styles.image__VC}
                    resizeMode="contain"
                    source={FK} />
                <View style={styles.main__text}>
                    <Text style={styles.hero__text}>Welcome To Your Dynamic Dashboard</Text>
                    <Text style={styles.hero__paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Text>
                </View>
                <View style={styles.btn__container}>
                    <TouchableOpacity style={styles.login__btn}
                    onPress={() => navigation.navigate("login")}
                    >
                        <Text style={styles.login__btn__text}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signup__btn}
                    onPress={() => navigation.navigate("signup")}
                    >
                        <Text style={styles.signup__btn__text}>
                            SignUp
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    image__VC: {
        height: height / 1.5,
        marginBottom: -50,
    },
    main__text: {
        paddingHorizontal: 5 * 4,
    },
    hero__text: {
        fontSize: 30,
        color: '#407BFF',
        fontFamily: 'poppins-bold',
        textAlign: 'center',
    },
    hero__paragraph: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'poppins-regular',
        textAlign: 'center',
        marginTop: 5 * 4,
    },
    btn__container: {
        paddingHorizontal: 10 * 2,
        paddingTop: 8 * 6,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    login__btn: {
        backgroundColor: '#407BFF',
        paddingVertical: 10 * 1.5,
        paddingHorizontal: 10 * 2,
        width: "42%",
        borderRadius: 10,
        shadowColor: '#407BFF',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    login__btn__text: {
        fontFamily: 'poppins-bold',
        color: '#fff',
        fontSize: 20,
        textAlign: "center",
    },
    signup__btn: {
        backgroundColor: '#fff',
        paddingVertical: 10 * 1.5,
        paddingHorizontal: 10 * 2,
        width: "42%",
        borderRadius: 10,
        shadowColor: '#407BFF',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        borderWidth: 1,
        borderColor: '#407BFF',
    },
    signup__btn__text: {
        fontFamily: 'poppins-bold',
        color: '#407BFF',
        fontSize: 20,
        textAlign: "center",
    },
});
