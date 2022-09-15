import { Container } from 'components/common/Container';
import { Outlet } from 'react-router-dom';
import { Header } from './common/Header.styles';
import { NavBar } from './common/NavBar/NavBar';
import { UserMenu } from './common/UserMenu/UserMenu';

const AppBar = () => {
  return (
    <Container>
      <Header>
          <NavBar />
          <UserMenu />
       </Header>
      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default AppBar;
