import { Text, VStack } from 'native-base';
import { Header } from '../components/Header';
import { useRoute } from '@react-navigation/native';

type RoutesParams = {
  orderId: string;
}

export function Details() {
  const route = useRoute();

  const { orderId } = route.params as RoutesParams;

  return (
    <VStack flex={1} bg="gray.700" >
        <Header title='Solicitação'/>
        <Text color="white">
          { orderId }
        </Text>
    </VStack>
  );
}