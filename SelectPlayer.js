import { StyleSheet, Text, View, Button } from 'react-native';
export default function SelectPlayer({ setPlayer }) {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button
      onPress={() => setPlayer("White")}
      title="Play as White"/>
      <Button
      onPress={() => setPlayer("Black")}
      title="Play as Black"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
