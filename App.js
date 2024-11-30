import { StyleSheet, View, Text} from 'react-native';
import Prioridades from './components/Prioridades';

export default function App() {


  return (
    <View style={estilos.container}>
    <Text>Ola</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
});