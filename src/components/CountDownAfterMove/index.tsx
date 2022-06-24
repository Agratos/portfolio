import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { useCount } from 'hooks/useCount';



interface CountDownTextProps {
    text: string;
    countText: [start: number, end: number, interval: number, gap: number, increase: string, text: string];
    path: [path: string, replace: boolean]
    backgroundColor?: string;
}
const CountDownText = ({text, countText, path}: CountDownTextProps) => {
    const count = useCount(countText[0], countText[1], countText[2], countText[3], countText[4]);
    let navigate = useNavigate()

    useEffect(() => {
        count === countText[1] && navigate(path[0],{replace:path[1]});
    },[count])

    return (
        <Wrapper>
            <Text>
                {text}
            </Text>
            <CountText>
                {count}
                {countText[5]}
                <MoveToPathButton to={path[0]}>바로 이동하기</MoveToPathButton>
            </CountText>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    ${({theme}) => theme.div.flexColumnCenterCenter}
    ${({theme}) => theme.font.title }
`;
const Text = styled.div``;
const CountText = styled(Wrapper)``;
const MoveToPathButton = styled(Link)``;

export default CountDownText