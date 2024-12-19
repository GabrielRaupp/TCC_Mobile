import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Perfil({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [campus, setCampus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/perfil');
      const data = await response.json();

      if (data) {
        setUsername(data.username);
        setEmail(data.email);

        const date = new Date(data.createdAt);
        const formattedDate = date.toLocaleString('pt-BR', { 
          timeZone: 'America/Sao_Paulo',
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });

        setCreatedAt(formattedDate);
        setCampus(data.campus);

        localStorage.setItem('username', data.username);
        localStorage.setItem('email', data.email);
        localStorage.setItem('createdAt', formattedDate);
        localStorage.setItem('campus', data.campus);
      }
    };

    fetchData();
  }, []);

  const handlePasswordReset = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.PerfilContainer}>
      <Text style={styles.PerfilHeader}>Perfil do Usuário</Text>
      
      <View style={styles.PerfilInfo}>
        <Text><Text style={styles.bold}>Nome do Usuário:</Text> {username}</Text>
        <Text><Text style={styles.bold}>Email:</Text> {email}</Text>
        <Text><Text style={styles.bold}>Data de Criação:</Text> {createdAt}</Text>
        <Text><Text style={styles.bold}>Campus:</Text> {campus}</Text>
      </View>
      
      <Button title="Redefinir Senha" onPress={handlePasswordReset} />
    </View>
  );
}

const styles = StyleSheet.create({
  PerfilContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  PerfilHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  PerfilInfo: {
    marginBottom: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Perfil;
