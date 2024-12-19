import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import InputMask from 'react-native-masked-text';  

const Cadastro = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [campus, setCampus] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email, telefone, campus }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Erro ao cadastrar usuário');
      }

      alert('Usuário cadastrado com sucesso!');
    } catch (error) {
      alert(error.message);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <View style={{ padding: 20 }}>
      <Text>Cadastro</Text>
      <TextInput 
        placeholder="Digite seu nome de usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput 
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        placeholder="Digite sua senha"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
      />
      <Button title={showPassword ? 'Ocultar Senha' : 'Mostrar Senha'} onPress={togglePasswordVisibility} />
      
      <InputMask
        type="custom"
        options={{ mask: '(99) 99999-9999' }}
        value={telefone}
        onChangeText={setTelefone}
      />
      <TextInput 
        placeholder="Digite seu telefone"
        value={telefone}
        onChangeText={setTelefone}
      />
      <TextInput 
        placeholder="Selecione um campus"
        value={campus}
        onChangeText={setCampus}
      />
      <Button title="Cadastrar" onPress={handleSubmit} />
    </View>
  );
};

export default Cadastro;
