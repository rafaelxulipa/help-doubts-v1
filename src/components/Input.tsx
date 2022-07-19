import { Input as InputNativeBase, IInputProps} from 'native-base';

export function Input({ ...rest }: IInputProps ) {
  return (
    <InputNativeBase 
        bg="gray.700"       
        h={14}
        size="md"
        borderWidth={0}
        fontSize="md"
        fontFamily="body"
        placeholderTextColor="gray.300"
        color="white"
        _focus={{
            borderWidth: 1,
            borderColor: "green.500",
            bg: "gray.700"

        }}
        { ...rest }
    />
  );
}