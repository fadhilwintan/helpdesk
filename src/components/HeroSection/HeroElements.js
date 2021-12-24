import styled from 'styled-components';

export const HeroContainer = styled.div`
 background: #F9EAD3;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 0 30px;
 height: 175px;
 position: relative;
 z-index: 1;

 @media screen and (max-width: 768px) {
    height: 150px;
    padding : 0 15px;
}

@media screen and (max-width: 480px) {
    height: 120px;
    padding : 0 5px;
}
`;

export const HeroBg = styled.div`
 position: absolute;
 left: 30px;
 top: 10px;
 overflow: hidden;

 @media screen and (max-width: 520px) {
    left: 18px;
}
`;

export const ImgBg = styled.img`
 width: 600px;
 height: 150px;

 @media screen and (max-width: 768px) {
    width: 480px;
    height: 120px;
}

@media screen and (max-width: 520px) {
    width: 465px;
    height: 120px;
}

`;

export const HeroContent = styled.div`
 z-index: 3;
 width: 500px;
 position: absolute;
 padding: 8px 24px;
 display: flex;
 flex-discretion: column; 
 align-items: center;
 left: 220px;
 top: 10px;

`;

// export const HeroH1 = styled.h1`
//  color: #020202;
//  font-size: 35px;
//  text-align: left;
//  white-space: pre-wrap;
//  text-shadow: 1.5px 1.5px 0px #D39B5D;


//  @media screen and (max-width: 768px) {
//      font-size: 24px;
//  }

//  @media screen and (max-width: 480px) {
//      font-size: 18px;
//  }
// `;
