import { View, Text, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Footer.module.css'; 

function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.socialList}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/?locale=pt_BR')}>
          <Icon style={styles.icon} name="facebook" size={25} color="#ffff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/gabriel.raupp17/')}>
          <Icon style={styles.icon} name="instagram" size={25} color="#ffff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/checkpoint/challenge/AgFw1s0up6YjiwAAAZBLshnxQjlnMVOY525QlcnAvM_jECGIVnmyMp8ifWbemZrPEXKhyxLzOVl0U9LahPvlX0wAryJjSA?ut=3rSFr8wbj9eHk1')}>
          <Icon style={styles.icon} name="linkedin" size={25} color="#ffff" />
        </TouchableOpacity>
      </View>
      <Text style={styles.copyRight}>
        <Text style={styles.brand}>IntelAgend</Text> &copy; 2024
      </Text>
    </View>
  );
}

export default Footer;