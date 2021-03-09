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
                            한국방송통신대학교 컴퓨터과학과 재학중
                        </Description>
                        <Description>
                            양영디지털고등학교 S/W개발과 졸업
                        </Description>
                        <Description>
                            React를 다루는 프론트엔드 개발자입니다.
                        </Description>
                        <Description>
                            최근 읽는 책은 숨결이 바람 될 때와 YDKJS입니다!
                        </Description>
                    </Texts>
                </TextContainer>
                <TextContainer>
                    <Texts>
                        <TitleText>자기소개</TitleText>
                        <SubText>ABOUT ME</SubText>
                        <Description>
                            매일 성장을 추구하고 책 읽는 것을 좋아하는
                            개발자입니다.
                        </Description>
                        <Description>
                            "오늘 우리가 경험하고 듣고 배우고 행하는 것이 내일의
                            우리를 만든다" 라는 말을 가슴에 품고 있습니다.
                        </Description>
                        <Description>봐주셔서 감사합니다!</Description>
                    </Texts>
                </TextContainer>
            </ProfileWrapper>
        </ProfileContainer>
    );
}

export default Profile;
