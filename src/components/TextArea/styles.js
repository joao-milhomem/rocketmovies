import styled from "styled-components";

export const Container = styled.textarea`
width: 100%;
height: 274px;
resize: none;

padding: 12px;

background-color:${({theme}) => theme.COLORS.BACKGROUND_1};
color: ${({theme}) => theme.COLORS.TEXT_1};

border-radius: 10px;
border: none;

margin: 8px 0 ;

::placeholder{
    color: ${({theme}) => theme.COLORS.TEXT_4};
}
`