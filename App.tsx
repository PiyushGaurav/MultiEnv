import React from 'react';
import {Text, View} from 'react-native';
import Config from 'react-native-config';
function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }}>
      <Text>
        You're in <Text style={{fontWeight: 'bold'}}>{Config.ENV}</Text>{' '}
        Environment
      </Text>
    </View>
  );
}
export default App;
