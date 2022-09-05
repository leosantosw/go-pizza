import { Container } from './styles';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Text } from 'react-native';

export function SignIn(){
    return (
        <Container>
            <Input 
                type="secondary"
                placeholder="E-mail"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
            />

            <Input
                type="secondary"
                placeholder="Senha"
                secureTextEntry
            />

            <Button 
                title="Entrar"
                type="secondary"
            />
        </Container>
    )
}