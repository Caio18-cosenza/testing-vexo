import { Link } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { identifyDevice } from 'vexo-analytics';

export default function App() {
  useEffect(() => {
    async function id() {
      await identifyDevice('1234-abcd');
    }
    id();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
      }}
    >
      <Text> App </Text>
      <Link
        href={{
          pathname: '/Home',
          params: {},
        }}
      >
        <Text>Go To Home</Text>
      </Link>
    </View>
  );
}
