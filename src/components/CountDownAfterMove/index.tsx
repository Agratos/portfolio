import { useEffect } from 'react';
import styled from 'styled-components';

import useCount from 'hooks/useCount';


interface countDownTextProps {
    text: string;
    countText: [start: number, end: number, interval: number, gap: number, increase: string, text: string];
    path: string;
    backgroundColor?: string;
}
const CountDownText = ({text, countText, path}: countDownTextProps) => {
    const count = useCount(countText[0], countText[1], countText[2], countText[3], countText[4]);

    useEffect(() => {

    },[countText])

    return (
        <Wrapper>
            <Text>
                {text}
            </Text>
            <CountText>
                {count}
                {countText[5]}
            </CountText>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    ${({theme}) => theme.div.flexColumnCenterCenter}
    ${({theme}) => theme.font.title }
`;
const Text = styled.div``;
const CountText = styled.div``;

export default CountDownText