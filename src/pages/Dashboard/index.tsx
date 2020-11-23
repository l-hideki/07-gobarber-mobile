import React from 'react';
import Button from '../../Components/Button';
import { Title, Container } from './styles';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <>
      <Container>
        <Title>Hello Dashboard</Title>
        <Button onPress={signOut}>Deslogar</Button>
      </Container>
    </>
  );
};

export default Dashboard;
