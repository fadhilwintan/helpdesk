import styled from 'styled-components';

export const Container = styled.div`
 min-height: 692px;
 position: fixed;
 bottom: 0;
 left: 0;
 right: 0;
 top: 0;
 z-index: 0;
 overflow: hidden;
 background: #ffffff;
`;

export const FormWrap = styled.div`
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
`;

export const FormContent = styled.div`
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;

 @media screen and (max-width: 480px) {
     padding: 10px;
 }
`;

export const Form = styled.form`
 background: #ffffff;
 max-width: 400px;
 height: auto;
 width: 100%;
 z-index: 1;
 display: grid;
 margin: 0 auto;
 padding: 80px 32px;
 border: 0.2px solid #020202;
 border-radius: 20px;
 box-shadow: 25px 25px 4px rgba(211, 155, 93, 0.5);
 
 @media screen and (max-width: 400px) {
     padding: 32px 32px;
 }
`;

export const FormH1 = styled.h1`
 margin-bottom: 36px;
 color: #020202;
 font-size: 24px;
 font-weight: bold;
 text-align: center;
`;

export const FormLabel = styled.label`
 margin-bottom: 10px;
 font-size: 16px;
 color: #020202;
 text-align: center;
`;

export const FormInput = styled.input`
 padding: 10px 10px;
 margin-bottom: 34px;
 border: 0.5 solid #020202;
 border-radius: 10px;
`;

export const FormButton = styled.button`
 background: #fffff;
 padding: 10px 100px;
 border: 0.2 solid #020202;
 border-radius: 30px;
 color: #020202;
 margin-top: 10px;
 font-size: 20px;
 box-shadow: 5px 5px 4px rgba(211, 155, 93, 0.5);
 cursor: pointer;
`;

export const Text = styled.span`
 text-align: center;
 margin-top: 24px;
 color: #fff;
 font-size: 14px;
`;

