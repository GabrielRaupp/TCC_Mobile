import { View, StyleSheet } from 'react-native';
import styles from './Container.module'; 

function Container(props) {
  const containerStyle = [
    styles.container,
    props.customStyle ? props.customStyle : {},
  ];

  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  );
}

export default Container;