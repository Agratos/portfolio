import React from 'react';
import styled from 'styled-components';
import { marked } from 'marked';
import useFetch from 'hooks/useFetch';

interface mdFileRenderProps {
    mdFile: string;
}
const MdFileRender = ({mdFile}: mdFileRenderProps ) => {
    const [mdText] = useFetch(mdFile);

    return (
        <Wrapper>
            <MdRender dangerouslySetInnerHTML={{__html:marked(`${mdText}`)}}></MdRender>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: block;
`;
const MdRender = styled.article`
    margin: 0 auto;
    width: 70%;
`;

export default MdFileRender