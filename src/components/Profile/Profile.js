import React from 'react';

import {
    ProfileContainer,
    ProfileWrapper,
    ProfileImageContainer,
    ProfileImage,
    TextContainer,
    Texts,
    TitleText,
    SubText,
    Description,
} from './Profile.elements';
import profile from '../../images/profile.jpg';

function Profile() {
    return (
        <ProfileContainer>
            <ProfileWrapper>
                <ProfileImageContainer>
                    <ProfileImage src={profile} />
                </ProfileImageContainer>
                <TextContainer>
                    <Texts>
                        <TitleText>장찬희</TitleText>
                        <SubText>Chanhee Jang</SubText>
                        <Description>
                            양영디지털고등학교 S/W개발과 졸업
                        </Description>
                        <Description>React, Node.js로 개발합니다.</Description>
                        <Description>하와와와</Description>
                    </Texts>
                </TextContainer>
            </ProfileWrapper>
        </ProfileContainer>
    );
}

export default Profile;
