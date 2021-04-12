import React from 'react'
import styled from 'styled-components'
import FrameOne from './FrameOne'

function MainPage() {
  return (
    <BackgroundPage>
      <FrameOne></FrameOne>
    </BackgroundPage>
  )
}

export default MainPage

const BackgroundPage = styled.div`
  background: rgb(237,132,125);
  background: linear-gradient(180deg, rgba(237,132,125,1) 0%, rgba(200,104,207,1) 100%);
  height: 900px;
  display: flex;
	flex-direction: row;
	flex-wrap: wrap-reverse;
	justify-content: space-around;
	align-items: center;
	align-content: center;
}
`