import { StyleSheet, Text, View, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Chessboard, { ChessboardRef } from 'react-native-chessboard'
import { useEffect, useRef, useState } from 'react';
export default function ChessboardWrapper({ player }) {
  const [turn, setTurn] = useState("White");
  const chessboardRef = useRef(null);
  const url = "http://192.168.1.139:8000/move"
  const aiturn = "b"
  const onMoveCallback = async(state) => {
    if (turn == "White") {
      setTurn("Black");
    }
    if (turn == "Black") {
      setTurn("White");
    }

    //console.log(state)
    if (state.fen.split(" ")[1] != aiturn) {
      return;
    }
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        fen:state.fen
      })
    });
    const responseBody = await response.json();
    const move = responseBody['move'];
    const from = move.substring(0, 2);
    const to = move.substring(2, 4);

    await chessboardRef.current?.move({from: from, to:to});
  }
  useEffect(() => {
    console.log(player)
    if (player == "Black") {
      // app making the move
    }
  }, [])
  return (
    <View>
      <View style={styles.container}>
        <GestureHandlerRootView style={styles.container}>
          <Chessboard
            ref={chessboardRef}
            onMove={({ state }) => {
              onMoveCallback(state)
            }}
          />
        </GestureHandlerRootView>
      </View>
      <View style={styles.container}>
        <Text>Turn: {turn}</Text>
      </View>
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