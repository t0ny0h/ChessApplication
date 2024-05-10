import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useRef } from 'react';
import ChessboardWrapper from './ChessboardWrapper';
import SelectPlayer from './SelectPlayer';
export default function App() {
  const [player, setPlayer] = useState(null)

  return (
    <View style = {styles.container}>
      {!player && <SelectPlayer setPlayer={setPlayer}/>}
      {player && <ChessboardWrapper player={player}/>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});