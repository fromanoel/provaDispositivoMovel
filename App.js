import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import ItemTarefa from './components/ItemTarefa';
import FormularioTarefa from './components/FormularioTarefa';

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [tarefaEditando, setTarefaEditando] = useState(null);

  const adicionarTarefa = (tarefa) => {
    setTarefas([...tarefas, { ...tarefa, id: Date.now().toString() }]);
  };

  const atualizarTarefa = (tarefaAtualizada) => {
    setTarefas(tarefas.map(tarefa => tarefa.id === tarefaAtualizada.id ? tarefaAtualizada : tarefa));
    setTarefaEditando(null);
  };

  const deletarTarefa = (tarefaId) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== tarefaId));
  };

  const editarTarefa = (tarefa) => {
    setTarefaEditando(tarefa);
  };

  return (
    <View style={estilos.container}>
      <FormularioTarefa aoEnviar={tarefaEditando ? atualizarTarefa : adicionarTarefa} tarefa={tarefaEditando} />
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemTarefa tarefa={item} aoDeletar={deletarTarefa} aoEditar={editarTarefa} />
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    width: '100%'
  },
});