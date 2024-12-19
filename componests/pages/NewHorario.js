import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import HorarioForm from '../horario/HorarioForm'; // Adapt this form for React Native

function NewHorario() {
  const createPost = async (horario) => {
    try {
      const response = await fetch('http://localhost:3000/horarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(horario),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar horário');
      }
      
      // Navigate to horarios screen or show success message
    } catch (error) {
      console.error("Erro ao criar horário:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Criar Horário</Text>
      <Text>Crie seu horário para depois ele ser adicionado na sua agenda pessoal</Text>
      <HorarioForm handleSubmit={createPost} btnText="Criar Horário" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default NewHorario;
