import { StyleSheet, View} from 'react-native';
import ItemTarefa from './components/ItemTarefa';
import FormularioTarefa from './components/FormularioTarefa';


export default function App() {


  return (
    <View style={estilos.container}>
    <FormularioTarefa/>
      <ItemTarefa/>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});