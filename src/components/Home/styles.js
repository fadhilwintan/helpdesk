import styled from 'styled-components'

export const Flex = styled.div`
 display: flex;
 flex-direction: ${({direction}) => direction};
 justify-content: ${({justify}) => justify};
 align-items: ${({align}) => align};
 flex-wrap: ${({wrap}) => wrap};
 width: 100%;
 height: 100%;

`