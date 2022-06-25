import React from 'react'
import styled from 'styled-components'

const AboutText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    height: 66vh;
`

const About: React.FunctionComponent = () => {
    return (
        <AboutText>About</AboutText>
    )
}

export default About
