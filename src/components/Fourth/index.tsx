import { ReactNode } from 'react';

import { Container } from './styles';

interface FourthProps {
  children: ReactNode;
}

function Fourth({ children }: FourthProps) {
  return (
    <Container>
      <h1>Fourth</h1>
      {children}
    </Container>
  );
};

export default Fourth;
