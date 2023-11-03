import styled from "styled-components";

import { useThemeEffect } from "hooks/theme/useThemeEffect";

import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): React.ReactNode => {
  useThemeEffect();

  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.div``;
const Content = styled.main`
  max-width: 1280px;
  width: 100%;
  padding: 72px 16px 0;
  margin: 0 auto;
`;

export default Layout;
