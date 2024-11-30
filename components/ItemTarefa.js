import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Prioridades from './Prioridades';

const ItemTarefa = ({ tarefa, aoDeletar, aoEditar }) => {
  return (
    <View style={estilos.itemTarefa}>
      <View style={estilos.infoTarefa}>
        <Text style={estilos.nomeTarefa}>{tarefa.nome}</Text>
        <Text style={estilos.descricaoTarefa}>{tarefa.descricao}</Text>
        <Prioridades prioridade={tarefa.prioridade} />
      </View>
      <View style={estilos.acoes}>
        <Pressable onPress={() => aoEditar(tarefa)} style={estilos.botaoEditar}>
          <Text>Editar</Text>
        </Pressable>
        <Pressable onPress={() => aoDeletar(tarefa.id)} style={estilos.botaoDeletar}>
          <Text>Deletar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  itemTarefa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  infoTarefa: {
    flex: 1,
  },
  nomeTarefa: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descricaoTarefa: {
    fontSize: 14,
    color: '#666',
  },
  acoes: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 20
  },
  botaoEditar: {
    marginRight: 10,
  },
  botaoDeletar: {
    color: 'red',
  },
});

export default ItemTarefa;