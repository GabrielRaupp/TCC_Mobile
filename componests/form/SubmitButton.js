import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

function SubmitButton({ text }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}



export default SubmitButton;
