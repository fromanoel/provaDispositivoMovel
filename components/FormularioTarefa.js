import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

const FormularioTarefa = ({ aoEnviar, tarefa }) => {
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

  const handleSubmit = () => {
    aoEnviar({ id: tarefa?.id, nome, descricao, prioridade });
    setNome('');
    setDescricao('');
    setPrioridade('Baixa');
  };

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
        <Text style={estilos.textoPrioridade}>Prioridade:</Text>
        <TouchableOpacity onPress={() => setPrioridade('Baixa')} style={estilos.radioBotao}>
          <View style={prioridade === 'Baixa' ? estilos.radioSelecionado : estilos.radioNaoSelecionado} />
          <Text style={prioridade === 'Baixa' ? estilos.textoSelecionado : estilos.textoNaoSelecionado}>Baixa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPrioridade('Média')} style={estilos.radioBotao}>
          <View style={prioridade === 'Média' ? estilos.radioSelecionado : estilos.radioNaoSelecionado} />
          <Text style={prioridade === 'Média' ? estilos.textoSelecionado : estilos.textoNaoSelecionado}>Média</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPrioridade('Alta')} style={estilos.radioBotao}>
          <View style={prioridade === 'Alta' ? estilos.radioSelecionado : estilos.radioNaoSelecionado} />
          <Text style={prioridade === 'Alta' ? estilos.textoSelecionado : estilos.textoNaoSelecionado}>Alta</Text>
        </TouchableOpacity>
      </View>
      <Button title={tarefa ? "Atualizar Tarefa" : "Adicionar Tarefa"} onPress={handleSubmit} />
    </View>
  );
};

const estilos = StyleSheet.create({
  formulario: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  containerPrioridade: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  textoPrioridade:{ 
    margin: 'auto'
  },
  radioBotao: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  radioSelecionado: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'blue',
    marginRight: 5,
  },
  radioNaoSelecionado: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    marginRight: 5,
  },
  textoSelecionado: {
    fontWeight: 'bold',
    color: 'blue',
  },
  textoNaoSelecionado: {
    color: 'black',
  },
});

export default FormularioTarefa;