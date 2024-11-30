import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const IndicadorPrioridade = ({ prioridade }) => {
  const obterIconePrioridade = (prioridade) => {
    switch (prioridade) {
      case 'Alta':
        return require('../assets/altaPrioridade.png');
      case 'Média':
        return require('../assets/mediaPrioridade.png');
      case 'Baixa':
        return require('../assets/baixaPrioridade.png');
      default:
        return null;
    }
  };

  const icone = obterIconePrioridade(prioridade);

  return (
    <View style={estilos.indicador}>
      {icone && <Image source={icone} style={estilos.icone} />}
    </View>
  );
};

const estilos = StyleSheet.create({
  indicador: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
  },
  icone: {
    width: 12,
    height: 12,
  },
});

export default IndicadorPrioridade;