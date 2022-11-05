import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import React from 'react'

function Category() {
  return (
    <List>
      <SLink to={'cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={'cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={'cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={'cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin: 2rem 0;
`

const SLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  cursor: pointer;
  background: linear-gradient(35deg, #494949, #313131);
  width: 7rem;
  height: 7rem;
  transform: scale(0.7);

  h4 {
    color: white;
    font-size: 0.7rem;
  }
  svg {
    color: white;
    font-size: 1.7rem;
  }
  &.active {
    background: #f3fe24;
  }
`

export default Category
