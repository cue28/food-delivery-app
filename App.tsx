import * as React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Pressable, Text, View} from 'react-native';
import {useCallback} from 'react';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

function HomeScreen({navigation}: HomeScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pressable
        onPress={onClick}
        style={({pressed}) => [
          {backgroundColor: pressed ? 'orange' : 'black'},
          {padding: 8, borderRadius: 4},
        ]}>
        <Text style={{color: 'white'}}>Home Screen</Text>
      </Pressable>
    </View>
  );
}

function DetailsScreen({navigation}: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable onPress={onClick}>
        <Text>Details Screen</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '홈 화면'}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
      {/* <View style={styles.backdrop}>
        <View style={styles.modal}>
          <Text>Hello</Text>
        </View>
      </View> */}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   backdrop: {
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     ...StyleSheet.absoluteFillObject,
//   },
//   modal: {
//     position: 'absolute',
//     top: 200,
//     bottom: 200,
//     right: 20,
//     left: 20,
//     paddingHorizontal: 30,
//     paddingVertical: 30,
//     borderRadius: 8,
//     backgroundColor: 'white',
//   },
// });

export default App;
