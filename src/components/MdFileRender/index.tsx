import React from 'react';
import styled from 'styled-components';
import { marked } from 'marked';
import useFetch from 'hooks/useFetch';

type mdFileRenderProps = {
    mdFile: string;
}
const MdFileRender = ({mdFile}: mdFileRenderProps ) => {
    const [mdText, isError, isLoading] = useFetch(mdFile);

    return (
        <Wrapper>
            <MdRender dangerouslySetInnerHTML={{__html:marked(`${mdText}`)}}></MdRender>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
`;
const MdRender = styled.article`
    margin: 0 auto;
`;

export default MdFileRender