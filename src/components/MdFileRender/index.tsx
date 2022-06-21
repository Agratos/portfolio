import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { marked } from 'marked';
import MainMd from 'assets/dummies/main.md';

const MdFileRender = () => {
    const [mdText, setMdText] = useState('');

    useEffect(() => {
      fetch(MainMd).then(res => res.text()).then(text => setMdText(marked(text)));
    })

    return (
        <Wrapper>
            <MdRender dangerouslySetInnerHTML={{__html: mdText}}></MdRender>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
`;
const MdRender = styled.article`
    margin: auto;
`;

export default MdFileRender