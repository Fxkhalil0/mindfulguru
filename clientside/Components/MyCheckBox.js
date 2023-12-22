import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';

export default function MyCheckBox({ label }) {
  const [checked, setChecked] = useState(false);
  const checkButtonColor = '#407BFF';


  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
        color={checkButtonColor}
      />
      <Text>{label}</Text>
    </View>
  );
}
