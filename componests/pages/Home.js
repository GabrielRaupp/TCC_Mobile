import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import LinkButton from '../layout/LinkButton';  // Assuming you have a custom component for navigation

const Home = () => {
  const [output, setOutput] = useState('Diga algo...');

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'pt-BR';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      const actions = {
        'criar conta': () => {
          // Navigate to another screen (React Navigation is used here)
        },
        'mudar fundo': () => {
          document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        },
        'mostrar mensagem': () => {
          setOutput('Você está usando o IntelAgend!');
        },
      };

      const startRecognition = () => {
        recognition.start();
        setOutput('Escutando...');
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        setOutput(`Você disse: "${transcript}"`);

        if (actions[transcript]) {
          actions[transcript]();
        } else {
          setOutput(`Comando não reconhecido: "${transcript}"`);
        }
      };

      recognition.onerror = (event) => {
        setOutput(`Erro: ${event.error}`);
      };

      recognition.onend = () => {
        setOutput('Reconhecimento finalizado. Clique novamente para falar.');
      };

      // Inicia o reconhecimento ao montar o componente
      // This logic should be handled differently in React Native
    } else {
      setOutput('Seu navegador não suporta reconhecimento de voz.');
    }
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Bem-vindo ao IntelAgend</Text>
      <Text>Crie sua conta para começar a usufruir do nosso sistema!</Text>
      <Button title="Iniciar Comando de Voz" onPress={() => startRecognition()} />
      <Text>{output}</Text>
      <LinkButton text="Criar conta" />
      {/* Correct the image path to match the actual location */}
      <Image source={require('../../assets/images/savings.svg')} />
    </View>
  );
};

export default Home;
