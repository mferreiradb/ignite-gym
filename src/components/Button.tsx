import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base';

interface Props extends IButtonProps {
  title: string;
  variant?: 'solid' | 'outline';
}

export function Button({ title, variant = 'solid', ...rest }: Props) {
  return (
    <NativeBaseButton
      _pressed={{
        bg: variant === 'outline' ? 'gray.500' : 'green.500',
      }}
      rounded="sm"
      h={14}
      w="full"
      bg={variant === 'outline' ? 'transparent' : 'green.700'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor="green.500"
      {...rest}
    >
      <Text
        fontFamily="heading"
        fontSize="sm"
        color={variant === 'outline' ? 'green.500' : 'white'}
      >
        {title}
      </Text>
    </NativeBaseButton>
  );
}
