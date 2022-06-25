import React from 'react'
import styled from 'styled-components'

const ProfileText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    height: 66vh;
`

const Profile: React.FunctionComponent = () => {
    return (
        <ProfileText>Profile</ProfileText>
    )
}

export default Profile
