import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons'; 

const Contact = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text>Relate Bugs</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/?locale=pt_BR')}>
          <FontAwesome name="facebook" size={40} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/gabriel.raupp17/')}>
          <FontAwesome name="instagram" size={40} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/xyz')}>
          <FontAwesome name="linkedin" size={40} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/GabrielRaupp')}>
          <FontAwesome name="github" size={40} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:gabiraupppimentel@gmail')}>
          <FontAwesome name="envelope" size={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Contact;
