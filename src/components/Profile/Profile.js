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
                            헬스를 시작한지 5개월된 헬린이이자 애독가입니다!
                        </Description>
                    </Texts>
                </TextContainer>
                <TextContainer>
                    <Texts>
                        <TitleText>자기소개</TitleText>
                        <SubText>ABOUT ME</SubText>
                        <Description>
                            매일 성장을 추구하고 독서를 좋아하는 개발자입니다.
                        </Description>
                        <Description>
                            "아주 간단한 일이지만 미래에 대해 밝고 적극적으로
                            행동하는 것이 일과 인생을 밝혀주는 첫번째 조건이다."
                            라는 말을 좋아합니다!
                        </Description>
                        <Description>봐주셔서 감사합니다!</Description>
                    </Texts>
                </TextContainer>
            </ProfileWrapper>
        </ProfileContainer>
    );
}

export default Profile;
