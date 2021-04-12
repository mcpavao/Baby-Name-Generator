import React from 'react'
import styled from 'styled-components'

function Frame() {
  return (
    <FrameOne>Hello World</FrameOne>
  )
}

export default Frame

const FrameOne = styled.div`
  background-color: yellow;
  display: flex;
	justify-content: space-around;
	align-items: center;
  height: 500px;
  width: 600px;
  border-radius: 5px;
`