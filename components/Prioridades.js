import React from 'react';
import { View, StyleSheet } from 'react-native';

const IndicadorPrioridade = ({ prioridade }) => {
  let corDeFundo;
  switch (prioridade) {
    case 'Alta':
      corDeFundo = 'red';
      break;
    case 'Média':
      corDeFundo = 'orange';
      break;
    case 'Baixa':
      corDeFundo = 'green';
      break;
    default:
      corDeFundo = 'gray';
  }

  return <View style={[estilos.indicador, { backgroundColor: corDeFundo }]} />;
};

const estilos = StyleSheet.create({
  indicador: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: 10,
  },
});

export default IndicadorPrioridade;