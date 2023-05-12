import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base';

interface Props extends IButtonProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <NativeBaseButton
      _pressed={{
        bg: 'green.500',
      }}
      rounded="sm"
      h={14}
      w="full"
      bg="green.700"
      {...rest}
    >
      <Text fontFamily="heading" fontSize="sm" color="white">
        {title}
      </Text>
    </NativeBaseButton>
  );
}
