import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function Radio() {
  const [checked, setChecked] = useState('Female');
  const radioButtonColor = '#407BFF';

  const radioOptions = [
    { label: 'Female', value: 'Female' },
    { label: 'Male', value: 'Male' },
    { label: 'Other', value: 'Other' },
  ];

  return (
    <View style={{flexDirection: "row" , justifyContent: "space-between"}}>
      {radioOptions.map((option) => (
        <View key={option.value} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value={option.value}
            status={checked === option.value ? 'checked' : 'unchecked'}
            onPress={() => setChecked(option.value)}
            color={radioButtonColor}
          />
          <Text style={{color: '#000'}}>{option.label}</Text>
        </View>
      ))}
    </View>
  );
}
