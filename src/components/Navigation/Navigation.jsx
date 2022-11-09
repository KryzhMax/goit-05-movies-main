import {
  Header,
  ListStyled,
  LinkStyled,
  NavMenu,
  SectionContainer,
  LogoStyled,
  SpanStyled,
} from './Navigation.styled';

const Navigation = () => {
  return (
    <Header>
      <SectionContainer>
        <NavMenu>
          <div>
            <LogoStyled to="/">
              <SpanStyled role="img" aria-label="computer icon">
                The movieZz 🎬
              </SpanStyled>
            </LogoStyled>
          </div>
          <ListStyled>
            <li>
              <LinkStyled to="/" end>
                Home
              </LinkStyled>
            </li>
            <li>
              <LinkStyled to="/movies">Movies</LinkStyled>
            </li>
          </ListStyled>
        </NavMenu>
      </SectionContainer>
    </Header>
  );
};

export default Navigation;
