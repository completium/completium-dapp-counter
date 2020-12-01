/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Surface, withTheme, Button, Title, Paragraph, Dialog, Portal } from 'react-native-paper';
import BeaconModule from './Beacon';

const App = (props) => {
  const { colors } = props.theme;
  const [msg, setMsg] = React.useState('');
  const handleConnect = () => {
    BeaconModule.divide(
      500,
      5,
      (msg) => {
        console.log(msg);
      },
      (result) => {
        console.log(`result: ${result}`);
        setMsg(result+'');
      }
    );
    setMsg()
  }
  const hideDialog = () => { setMsg('') };
  return (
  <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start', backgroundColor: colors.surface }}>
    <Surface style={styles.surface}>
      <Button icon="wallet" mode="contained" onPress={handleConnect}>
        Connect to wallet
      </Button>
    </Surface>
    <Surface style={styles.surface}>
      <Title variant='h6'>
        Actions
      </Title>
    </Surface>
    <Surface style={styles.surface}>
      <Button icon="plus-one" mode="contained" onPress={() => console.log('Pressed')}>
        Increment
      </Button>
    </Surface>
    <Surface style={styles.surface}>
      <Button icon="numeric-negative-1" mode="contained" onPress={() => console.log('Pressed')}>
        Decrement
      </Button>
    </Surface>
    <Portal>
      <Dialog visible={msg !== ''} onDismiss={hideDialog}>
        <Dialog.Title>Alert</Dialog.Title>
        <Dialog.Content>
          <Paragraph>Msg from native module: {msg}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  </View>);
};

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});

export default withTheme(App);