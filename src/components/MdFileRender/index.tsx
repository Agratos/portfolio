import styled from 'styled-components';
import { marked } from 'marked';
import { useFetch } from 'hooks/useFetch';

interface MdFileRenderProps {
    mdFile: string;
}
const MdFileRender = ({mdFile}: MdFileRenderProps ) => {
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
`;

export default MdFileRender