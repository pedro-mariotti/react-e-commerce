import React from 'react';
import logo from '../../assets/lojinha-logo.svg';
import searchIcon from '../../assets/search-icon.png';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 22px 120px;
`;
const SearchDiv = styled.div`
  position: relative;
  width: 31%;
`;
const SearchInput = styled.input`
  &:focus {
    outline: none;
  }
  border: 1px solid #a6a39f;
  border-radius: 4px;
  width: 100%;
  padding: 8px 12px;
  color: #a6a39f;
`;
const SearchButton = styled.button`
  position: absolute;
  cursor: pointer;
  top: 8px;
  right: -15px;
  background: none;
  border: none;
`;
const NavOptionDiv = styled.div`
  display: flex;
  width: 30%;
  a {
    color: #252822;
  }
  button {
    font-weight: 500;
    color: white;
    background: #53b38d;
    padding: 10px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  justify-content: space-between;
  align-items: center;
`;

const NavBar = () => {
  return (
    <Nav>
      <img src={logo} alt="Logo" />
      <SearchDiv>
        <SearchInput type="text" placeholder="Pesquise por um produto" />
        <SearchButton>
          <img src={searchIcon} alt="Search Icon" />
        </SearchButton>
      </SearchDiv>
      <NavOptionDiv>
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
      </NavOptionDiv>
    </Nav>
  );
};

export default NavBar;
