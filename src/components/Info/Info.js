import React from 'react';

import {
    InfoContainer,
    InfoWrapper,
    InfoCard,
    InfoMain,
    InfoMainText,
    InfoContent,
    InfoText,
    InfoLink,
} from './Info.elements';

function Info() {
    return (
        <InfoContainer>
            <InfoWrapper>
                <InfoLink
                    href="https://github.com/Dellil/Chanlendar"
                    target="_blank"
                >
                    <InfoCard>
                        <InfoMain backgroundColor="#9775fa">
                            <InfoMainText>
                                {`<FullStack> Chanlendar </FullStack>`}
                            </InfoMainText>
                        </InfoMain>
                        <InfoContent>
                            <InfoText>데스크탑 앱으로 계획 관리 하기</InfoText>
                        </InfoContent>
                    </InfoCard>
                </InfoLink>
                <InfoLink
                    href="https://github.com/Dellil/TaxiDemandPrediction"
                    target="_blank"
                >
                    <InfoCard>
                        <InfoMain backgroundColor="#4dabf7">
                            <InfoMainText>
                                {`<AI>`}
                                <br />
                                TaxiDemand Prediction
                                <br />
                                {`</AI>`}
                            </InfoMainText>
                        </InfoMain>
                        <InfoContent>
                            <InfoText>
                                5분마다 서울특별시
                                <br />
                                택시 수요 예측하기
                            </InfoText>
                        </InfoContent>
                    </InfoCard>
                </InfoLink>
                <InfoLink href="https://velog.io/@mizukikawaii" target="_blank">
                    <InfoCard>
                        <InfoMain backgroundColor="#69db7c">
                            <InfoMainText>
                                {`<Blog>`}
                                <br />
                                Velog
                                <br />
                                {`</Blog>`}
                            </InfoMainText>
                        </InfoMain>
                        <InfoContent>
                            <InfoText>개발 블로그</InfoText>
                        </InfoContent>
                    </InfoCard>
                </InfoLink>
                <InfoLink href="https://github.com/Dellil" target="_blank">
                    <InfoCard>
                        <InfoMain backgroundColor="black">
                            <InfoMainText>
                                {`<Codes>`}
                                <br />
                                Github
                                <br />
                                {`</Codes>`}
                            </InfoMainText>
                        </InfoMain>
                        <InfoContent>
                            <InfoText>코드 저장소</InfoText>
                        </InfoContent>
                    </InfoCard>
                </InfoLink>
            </InfoWrapper>
        </InfoContainer>
    );
}

export default Info;
