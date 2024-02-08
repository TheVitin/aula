import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Text style={styles.container}>Crepúsculo da Reflexão</Text>
      <View>
        <Text style={styles.sla}>     No crepúsculo suave, onde o sol se despede timidamente do céu, os pássaros tecem sua última canção do dia. O vento sussurra segredos entre as folhas das árvores, enquanto as flores se recolhem para o repouso noturno. É nesse instante fugaz que a natureza revela sua verdadeira magia, um espetáculo silencioso e sublime que nos convida a contemplar a beleza efêmera da vida. É como se o universo inteiro, por um breve momento, compartilhasse conosco um segredo ancestral, lembrando-nos da nossa conexão eterna com tudo o que nos cerca. E assim, em meio à quietude da natureza, encontramos um refúgio para a alma, um momento de paz que transcende o tempo e o espaço, renovando-nos para enfrentar os desafios que o amanhã possa trazer.</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    padding: 15,
    textAlign: 'center',
    fontSize: 70,
    color: 'red',

  },

  sla: {
    flex: 1,
    borderWidth: 5,
    borderColor: 'blue',
    backgroundColor: 'lightblue',
    maxWidth: 1200,
    marginLeft: 328,
    fontSize: 40,
    padding: 15,
  }
});
