import styled, {css} from 'styled-components';

export default styled.select`
    font-family: 'Times New Roman';
    font-size:1rem; 
    border:none;
    padding:10px 10px; 
    margin:20px 20px;
    ${(props) =>
        props.background && 
        css`
        background:${(props) =>props.background};
        `} 
    color:black;
`;
