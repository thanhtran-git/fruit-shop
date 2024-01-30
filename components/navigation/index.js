import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  line-height: 5em;
  display: flex;
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-right: auto; /* Pushes the title to the far left */
`;

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 25px;
  margin-right: 20px;
`;

const StyledNavLink = styled.a`
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 700;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Navigation() {
  return (
    <StyledNav>
      <StyledTitle>Jessies Fruit Shop</StyledTitle>
      <StyledUl>
        <li>
          <StyledNavLink href="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink href="/cart">Cart</StyledNavLink>
        </li>
      </StyledUl>
    </StyledNav>
  );
}
