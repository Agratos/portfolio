import styled from "styled-components";
import CountDownAfterMove from "components/CountDownAfterMove";

const Error = () => {

    return (
        <Wrapper>
            <CountDownAfterMove 
                text={'죄송합니다. 요청하신 페이지는 찾을 수 없습니다.'}
                countText={[5,0,1000,1,'-','초후 메인 페이지로 이동합니다.']}
                path={['/',false]}
            />
        </Wrapper>
    )
}
const Wrapper = styled.div``;

export default Error;