import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const FormularioTarefa = ({ tarefa }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState('Baixa');

  useEffect(() => {
    if (tarefa) {
      setNome(tarefa.nome);
      setDescricao(tarefa.descricao);
      setPrioridade(tarefa.prioridade);
    }
  }, [tarefa]);


  return (
    <View style={estilos.formulario}>
      <TextInput
        style={estilos.input}
        placeholder="Nome da Tarefa"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={estilos.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <View style={estilos.containerPrioridade}>
        <Text>Prioridade:</Text>
        <Button title="Baixa" onPress={() => setPrioridade('Baixa')} />
        <Button title="Média" onPress={() => setPrioridade('Média')} />
        <Button title="Alta" onPress={() => setPrioridade('Alta')} />
      </View>
      <Button title="Adicionar Tarefa"/>
    </View>
  );
};

const estilos = StyleSheet.create({
    formulario: {
      marginBottom: 30,
      padding: 15,
      backgroundColor: '#f9f9f9',
      borderRadius: 10,
    },
    input: {
      borderWidth: 2,
      borderColor: '#ddd',
      padding: 12,
      marginBottom: 15,
      borderRadius: 5,
      backgroundColor: '#fff',
    },
    containerPrioridade: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 15,
    },
  });

export default FormularioTarefa;