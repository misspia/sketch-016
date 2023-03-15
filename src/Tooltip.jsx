import React from 'react'
import styled from "styled-components"

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0.5em;
  box-sizing: border-box;

  top: 5px;
  left: 5px;

  height: 1.5em;
  font-size: 0.8em;
  font-weight:300;
  font-family: Verdana, sans-serif;

  background-color: rgba(255, 255, 255, 0.3);
`

export const Tooltip = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
