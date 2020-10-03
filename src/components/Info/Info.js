import React from 'react';

import {
    InfoContainer,
    InfoWrapper,
    InfoCard,
    InfoMain,
    InfoContent,
    InfoText,
} from './Info.elements';

function Info() {
    return (
        <InfoContainer>
            <InfoWrapper>
                <InfoCard>
                    <InfoMain backgroundColor="#9775fa">Chanlendar</InfoMain>
                    <InfoContent>
                        <InfoText>Manage your plans on Desktop App</InfoText>
                    </InfoContent>
                </InfoCard>
                <InfoCard>
                    <InfoMain backgroundColor="#4dabf7">
                        TexiDemandPrediction
                    </InfoMain>
                    <InfoContent>
                        <InfoText>
                            Predicts the Taxi demand in Seoul, every
                            five-minutes
                        </InfoText>
                    </InfoContent>
                </InfoCard>
                <InfoCard>
                    <InfoMain backgroundColor="#69db7c">Velog</InfoMain>
                    <InfoContent>
                        <InfoText>개발 블로그</InfoText>
                    </InfoContent>
                </InfoCard>
                <InfoCard>
                    <InfoMain backgroundColor="black">Github</InfoMain>
                    <InfoContent>
                        <InfoText>코드 저장소</InfoText>
                    </InfoContent>
                </InfoCard>
            </InfoWrapper>
        </InfoContainer>
    );
}

export default Info;
