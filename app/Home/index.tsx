import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
      }}
    >
      <Text> Home </Text>
      <Link
        href={{
          pathname: '/Details',
          params: {},
        }}
      >
        <Text>Go To Details</Text>
      </Link>
    </View>
  );
}
