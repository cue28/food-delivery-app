import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

function Settings() {
  const [count, setCount] = useState(1);

  return (
    <View>
      <Pressable
        onPress={() => setCount(prev => prev + 1)}
        style={{backgroundColor: 'red'}}>
        <Text>{count}</Text>
      </Pressable>
    </View>
  );
}

export default Settings;
