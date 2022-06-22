import { createGlobalStyle } from 'styled-components';

const device = {
    pc: 'min-width: 1200px',
    tablet: 'max-width: 1200px',
    mobile: 'max-width: 900px'
}

export default createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
    }
    p{
        margin: 0;
    }
    @media screen and (${device.pc}){
    }
    @media screen and (${device.tablet}){
    }
    @media screen and (${device.mobile}){

    }
`