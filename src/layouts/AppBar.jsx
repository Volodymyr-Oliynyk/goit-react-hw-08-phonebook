import { NavBar } from './common/NavBar/NavBar';
import { UserMenu } from 'layouts/common/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/common/Container';

const AppBar = () => {
  return (
    <Container>
      <header>
        <NavBar />
        <UserMenu />
      </header>
      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default AppBar;
