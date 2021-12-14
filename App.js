import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import {StatusBar} from 'react-native';

const App = () => {
  const [isTorchOn, setIsTorchOn] = useState(false);

  const triggerTorch = () => {
    if (isTorchOn == true) {
      Torch.switchState(false);
      setIsTorchOn(false);
    } else {
      Torch.switchState(true);
      setIsTorchOn(true);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={triggerTorch} style={styles.torchContainer}>
        <Text style={styles.textButton}>{isTorchOn ? 'OFF' : 'ONN'}</Text>
      </TouchableOpacity>
      <StatusBar barStyle="light-content" backgroundColor="#916eff" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#916eff',
  },
  torchContainer: {
    backgroundColor: '#FFF',
    padding: 30,
    borderRadius: 8,
  },
  textButton: {
    color: '#916eff',
    fontSize: 30,
    fontWeight: '800',
  },
});
