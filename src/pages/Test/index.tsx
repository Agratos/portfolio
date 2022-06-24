import styled from "styled-components";
import TestCanvas from "components/TestCanvas";

const Test = () => {
    return (
        <Wrapper>
            <TestCanvas canvasWidth={1920} canvasHeight={1080}/>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;

export default Test;