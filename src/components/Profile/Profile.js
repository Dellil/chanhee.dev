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
                        <Description>React, Node.js를 다룹니다.</Description>
                        <Description>
                            프론트엔드 개발자를 꿈꾸는 자택경비원입니다.
                        </Description>
                    </Texts>
                </TextContainer>
                <TextContainer>
                    <Texts>
                        <TitleText>간단소개</TitleText>
                        <SubText>ABOUT ME</SubText>
                        <Description>
                            책 읽는 걸 좋아해서, 독서 모임에 참가중입니다.
                        </Description>
                        <Description>
                            성공은 매일 반복한 노력의 합이라는 말을 가슴에 품고
                            있습니다.
                        </Description>
                        <Description>
                            테스트의 중요성을 깨닫고, 테스팅을 공부하려 합니다.
                        </Description>
                        <Description>봐주셔서 감사합니다.</Description>
                    </Texts>
                </TextContainer>
            </ProfileWrapper>
        </ProfileContainer>
    );
}

export default Profile;
