import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface DummyProps {}

const Dummy = (props: DummyProps) => {
  return (
    <View style={styles.container}>
      <Text>Dummy</Text>
    </View>
  );
};

export default Dummy;

const styles = StyleSheet.create({
  container: {}
});
