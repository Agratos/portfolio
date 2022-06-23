import styled from 'styled-components';

import MdFileRender from 'components/MdFileRender';
import banner from 'assets/dummies/banner.md';

const Main = () => {
  return (
    <Wrapper>
      <MdFileRender mdFile={banner}/>
    </Wrapper>
  );
}
const Wrapper = styled.div``;

export default Main;
