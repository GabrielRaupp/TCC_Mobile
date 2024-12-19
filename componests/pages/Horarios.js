import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Alert, StyleSheet } from 'react-native';
import HorarioCard from '../horario/HorarioCard'; // Adapt the HorarioCard for React Native
import Loading from '../layout/Loading';
import Message from '../layout/Message';

function Horarios() {
  const [horarios, setHorarios] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [horarioMessage, setHorarioMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/horarios', { credentials: 'same-origin' });

        if (!response.ok) {
          throw new Error('Erro ao buscar horários');
        }

        const data = await response.json();
        const sortedHorarios = data.sort((a, b) => new Date(a.horarios) - new Date(b.horarios));
        setHorarios(sortedHorarios);
      } catch (error) {
        setErrorMessage('Falha ao carregar os horários. Tente novamente mais tarde.');
      } finally {
        setRemoveLoading(true);
      }
    };

    fetchData();
  }, []);

  const removeHorario = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/horarios/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
      });

      if (!response.ok) {
        throw new Error('Erro ao remover horário');
      }

      setHorarios((prevHorarios) => prevHorarios.filter((horario) => horario._id !== id));
      setHorarioMessage('Horário removido com sucesso!');
    } catch (error) {
      setErrorMessage('Falha ao remover o horário. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Meus Horários</Text>
        <Button title="Montar horário" onPress={() => {}} /> {/* Add navigation logic here */}
      </View>

      {horarioMessage && <Message type="success" msg={horarioMessage} />}
      {errorMessage && <Message type="error" msg={errorMessage} />}

      <View style={styles.container}>
        {horarios.length > 0 ? (
          <FlatList
            data={horarios}
            renderItem={({ item }) => (
              <HorarioCard
                key={item._id}
                id={item._id}
                name={item.name}
                horario={item.horarios}
                category={item.category || 'Sem categoria'}
                handleRemove={removeHorario}
              />
            )}
            keyExtractor={(item) => item._id}
          />
        ) : (
          !removeLoading ? <Loading /> : <Text>Não há horários cadastrados!</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Horarios;
