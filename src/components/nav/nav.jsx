import React from 'react';
import logo from '../../assets/lojinha-logo.svg';
import searchIcon from '../../assets/search-icon.png';
import styled from 'styled-components';
import { dark, darkGreen, gray } from '../../utils/colors';
import { tablet, mobile } from '../../utils/constants';

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  background-color: white;
  padding: 22px 120px;
  a {
    color: ${dark};
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
    button {
      font-weight: 500;
      color: white;
      background: ${darkGreen};
      padding: 10px 30px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: ${tablet}) {
    grid-template-columns: 1fr 1fr;
    padding: 10px 30px;
    .searchDiv {
      grid-column: 1/3;
      grid-row: 2;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .searchButton {
      right: 5px;
    }
    .navOptionDiv {
      display: none;
    }
  }
`;

const BurgerMenu = styled.div`
  display: none;
  @media (max-width: ${tablet}) {
    display: block;
  }
`;
const NavBar = () => {
  return (
    <Nav>
      <img src={logo} alt="Logo" />
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
        <button>Carrinho</button>
      </div>
    </Nav>
  );
};

export default NavBar;
