import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { mobile } from '../../../utils/constants';
import { dark, white, darkGreen } from '../../../utils/colors';
import { CartButton } from '../nav';

const StyledMenu = styled.div`
  display: none;
  @media (max-width: ${mobile}) {
    display: flex;
    justify-content: flex-end;
  }
`;

const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${white};
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  height: 100vh;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 9;
  gap: 16px;
  a {
    font-weight: 500;
    color: ${dark};
    transition: color 0.3s linear;
  }
`;
const BurgerButton = styled.button`
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${darkGreen};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <StyledMenu>
      <BurgerButton open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerButton>

      <BurgerMenu open={open}>
        <a href="">Início</a>
        <a href="">Produto</a>
        <a href="">Anunciar</a>
        <CartButton>Carrinho</CartButton>
      </BurgerMenu>
    </StyledMenu>
  );
}
