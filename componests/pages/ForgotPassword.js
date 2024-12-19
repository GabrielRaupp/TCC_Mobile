import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/forgotpassword', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message || 'Erro ao solicitar redefinição de senha');
    } catch (error) {
      console.error('Erro ao solicitar redefinição de senha:', error);
      setMessage('Erro ao solicitar redefinição de senha. Tente novamente.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Redefinir Senha</Text>
      <TextInput
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        style={{ borderBottomWidth: 1 }}
      />
      <Button title="Enviar Link para Redefinir Senha" onPress={handleSubmit} />
      {message && <Text>{message}</Text>}
    </View>
  );
};

export default ForgotPassword;
