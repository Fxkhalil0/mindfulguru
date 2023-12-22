import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function Input({ placeholder, textContentType }) {
    const [focused, setFocused] = useState(false);
    return (
        <TextInput
            placeholder={placeholder}
            textContentType={textContentType}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholderTextColor={"#626262"}
            style={[
                styles.textInput,
                focused && styles.textInputFocused,
            ]}
        />
    );
}

const styles = StyleSheet.create({
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
});
