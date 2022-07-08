import React from 'react';
import logo from '../../assets/lojinha-logo.svg';
import searchIcon from '../../assets/search-icon.png';
import styled from 'styled-components';
import { dark, darkGreen, gray } from '../../utils/colors';
import { mobile } from '../../utils/constants';
import MobileMenu from './mobileMenu/mobileMenu';

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  background-color: white;
  padding: 22px 120px;
  a {
    color: ${dark};
  }
  a:hover {
    font-weight: 700;
  }
  .searchDiv {
    position: relative;

    width: 80%;
  }
  .searchInput {
    border: 1px solid ${gray};
    border-radius: 4px;
    width: 100%;
    padding: 8px 12px;
    color: ${gray};
    z-index: 0;
  }
  .searchInput:focus {
    outline: none;
  }
  .searchButton {
    position: absolute;
    cursor: pointer;
    top: 8px;
    right: -15px;
    background: none;
    border: none;
  }
  .navOptionDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: ${mobile}) {
    grid-template-columns: 1fr 1fr;
    padding: 10px 30px;
    .searchDiv {
      grid-column: 1/3;
      grid-row: 2;
      width: 100%;
      display: flex;
      padding-top: 16px;
      justify-content: center;
      align-items: center;
    }
    .searchButton {
      right: 5px;
      top: 25px;
    }
    .navOptionDiv {
      display: none;
    }
  }
`;
export const CartButton = styled.button`
  font-weight: 500;
  color: white;
  background: ${darkGreen};
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function NavBar() {
  return (
    <Nav>
      <img src={logo} alt="Logo" />
      <MobileMenu />
      <div className="searchDiv">
        <input
          className="searchInput"
          type="text"
          placeholder="Pesquise por um produto"
        />
        <button className="searchButton">
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </div>
      <div className="navOptionDiv">
        <a href="" className="navOption">
          Início
        </a>
        <a href="" className="navOption">
          Produto
        </a>
        <a href="" className="navOption">
          Anunciar
        </a>
        <CartButton>Carrinho</CartButton>
      </div>
    </Nav>
  );
}
