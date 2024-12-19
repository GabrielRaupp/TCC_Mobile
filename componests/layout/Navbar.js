import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfessor, setIsProfessor] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    const loggedInUser = localStorage.getItem('username');

    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
      if (loggedInUser === 'Professores') {
        setIsProfessor(true);
      }
    }
  }, []);

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Yes',
          onPress: () => {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            setIsLoggedIn(false);
            setIsProfessor(false);
            navigation.navigate('Login');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.navbar}>
      <Image source={require('../../assets/images/costs_logo.png')} style={styles.logo} />
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.menuItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Horarios')}>
          <Text style={styles.menuItem}>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
          <Text style={styles.menuItem}>Contato</Text>
        </TouchableOpacity>
        {!isLoggedIn && (
          <TouchableOpacity onPress={() => navigation.navigate('SingUp')}>
            <Text style={styles.menuItem}>Minha conta</Text>
          </TouchableOpacity>
        )}
        {isLoggedIn && (
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.menuItem}>Deslogar</Text>
          </TouchableOpacity>
        )}
        {isProfessor && (
          <TouchableOpacity onPress={() => navigation.navigate('Contas')}>
            <Text style={styles.menuItem}>Contas</Text>
          </TouchableOpacity>
        )}
        {isLoggedIn && (
          <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
            <View style={styles.userIcon}>
              <Text style={styles.menuItem}>Perfil</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  menu: {
    flexDirection: 'row',
  },
  menuItem: {
    color: '#fff',
    marginHorizontal: 10,
    fontSize: 16,
  },
  userIcon: {
    marginLeft: 10,
  },
});

export default Navbar;
