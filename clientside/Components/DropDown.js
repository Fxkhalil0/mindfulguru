import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useFonts } from 'expo-font'

const cityData = [
  { label: 'Mumbai', value: '1' },
  { label: 'Pune', value: '2' },
  { label: 'Ahmedabad', value: '3' },
];
const stateData = [
  { label: 'Gujarat', value: '4' },
  { label: 'Maharashtra', value: '5' },
  { label: 'Karnataka', value: '6' },
];

export default function DropdownComponent() {
  
  const [cityValue, setCityValue] = useState(null);
  const [stateValue, setStateValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderCityLabel = () => {
    if (cityValue || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: '#407BFF' }]}>
          City
        </Text>
      );
    }
    return null;
  };
  const renderStateLabel = () => {
    if (stateValue || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: '#407BFF' }]}>
          State
        </Text>
      );
    }
    return null;
  };

  return (
    <View>
      <Text style={styles.question__style}>Your City</Text>
      <View style={styles.container}>
        {renderCityLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#407BFF' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={cityData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select City' : '...'}
          searchPlaceholder="Search..."
          value={cityValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setCityValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <Text style={styles.question__style}>Your State</Text>
      <View style={styles.container}>
        {renderStateLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#407BFF' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={stateData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select State' : '...'}
          searchPlaceholder="Search..."
          value={stateValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setStateValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 16,
  },
  dropdown: {
    height: 50,
    borderColor: '#407BFF',
    borderWidth: 3,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: "100%"
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  question__style: {
    fontFamily: 'poppins-bold',
    color: "#000",
    textAlign: "left",
    fontSize: 17,
    marginTop: 10,
  },
});