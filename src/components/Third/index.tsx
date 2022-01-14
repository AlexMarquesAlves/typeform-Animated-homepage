import { ReactNode } from 'react';

import { Container } from './styles';

interface ThirdProps {
  children: ReactNode;
}

function Third({ children }: ThirdProps) {
  return (
    <Container>
      <h1>Third</h1>
      {children}
    </Container>
  );
};

export default Third;
