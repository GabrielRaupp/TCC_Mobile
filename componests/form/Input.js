import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{text}:</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleOnChange}
        value={value}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
      />
    </View>
  );
}



export default Input;
