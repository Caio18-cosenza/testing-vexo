import { Button, Text, View } from 'react-native';
import { customEvent } from 'vexo-analytics';

export default function Details() {
  async function checkout() {
    customEvent('Checkout', {
      price: '$89',
      items: ['Eggs', 'Salad', 'Rice', 'Bean'],
      user: '1234-abcd',
    });
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
      }}
    >
      <Text> Details </Text>
      <Button title='Buy' onPress={() => checkout()} />
    </View>
  );
}
