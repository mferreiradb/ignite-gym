import { Input as NativeBaseInput, IInputProps } from 'native-base';

// A passagem das props ...rest deve sempre ser a ultima a ser declarada no componente
export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.700"
      borderWidth={0}
      h={14}
      px={4}
      fontSize="md"
      color="white"
      fontFamily="body"
      mb={4}
      _focus={{
        bg: 'gray.700',
        borderWidth: '1px',
        borderColor: 'green.500',
      }}
      {...rest}
    />
  );
}
