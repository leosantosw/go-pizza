import { Container, Load, Title, TypesProps } from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";

type ButtonProps = RectButtonProps & {
    title: string;
    type?: TypesProps;
    isLoading?: boolean;
}

export function Button({ title, type = 'primary', isLoading = false, ...rest }: ButtonProps) {
  return (
    <Container type={type} enabled={!isLoading} {...rest}>
      { isLoading ? <Load/> : <Title>{title}</Title>}
    </Container>
  );
}