import styled from "styled-components";
import { Link, useLocation } from "@remix-run/react";
import { useNavigate } from "react-router";
import { theme } from "~/utils/theme";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 12px;
  background-color: ${theme.primary["indigo-020"]};
  border-bottom: 1px solid ${theme.neutrals["cool-grey-200"]};
  color: ${theme.primary["indigo-400"]};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;

  @media only screen and (max-width: 600px) {
    margin-left: 12px;
  }
`;

type StyledLinkProps = {
  selected?: boolean;
  small?: string;
};

const StyledLink = styled(Link)<StyledLinkProps>`
  color: ${({ selected }) =>
    selected ? theme.primary["indigo-500"] : theme.primary["indigo-200"]};
  text-decoration: none;
  font-size: ${({ small }) => (small ? `13px` : `16px`)};
  margin-right: 10px;
  font-weight: ${({ selected }) => (selected ? 600 : 400)};
`;

const LogoText = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-left: 8px;
`;

type MenuLink = {
  title: string;
  url: string;
};

type Props = {};

export function Header({}: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  let links: MenuLink[] = [
    {
      title: "Home",
      url: "/",
    },
  ];

  return (
    <Container>
      <Left>
        <Logo onClick={() => navigate("/")}>
          <img src={"/logo.png?v=3"} width={30} />
          <LogoText>Remix Styled-components Starter</LogoText>
        </Logo>
        <Links>
          {links.map((link, i) => (
            <StyledLink
              key={i}
              to={link.url}
              selected={link.url === location.pathname}
            >
              {link.title}
            </StyledLink>
          ))}
        </Links>
      </Left>
      <Right>
        <LoginContainer></LoginContainer>
      </Right>
    </Container>
  );
}
