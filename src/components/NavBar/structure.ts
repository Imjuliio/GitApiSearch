import styled from 'styled-components';
 

export const Container = styled.nav`

  background: linear-gradient(0deg, rgba(6,2,11,1) 0%, rgba(31,36,47,0.9920343137254902) 100%);
  padding: 9px 59px 9px; 
  border-radius: 4.9em;
  width: 64em;
  margin-left: 2em;
`;

export const Contant = styled.div`
 
  img{
     height: 80px;
  }
`;

export const InputArea = styled.form`

  display: flex;
  float: right;
  margin-top: -4.7em;

`;


export const InputLabel = styled.label`
   
   background-color: black;

 `;


export const Input = styled.input`

  flex: 1;
  font-style: normal;
  font-weight: normal;
  font-size: 3px; 
  line-height: 12%; 
  color: #0079ff; 
  background: linear-gradient(0deg, rgba(6,2,11,1) 0%, rgba(31,36,47,0.9920343137254902) 100%);;
  border: none;
  margin: 0 0.8rem;
  border-radius: 22px;
  padding: 9px 19px 9px;

  @media (min-width: 768px) {
    font-size: 1.7rem;
    margin: 0 2.4rem;
  }

   &:focus{
     outline: none;
   }

`;




export const SubmitBtn = styled.button`

  background-color: aliceblue;
  border: none;
  padding: 9px 19px 9px;
  width: 112px;
  height: 52px;
  border-radius: 100px;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  color: aliceblue;
  font-family: 'Space Mono', sans-serif;
  cursor: pointer;
`;


export const Warn = styled.small`

    font-weight: bold;
    font-size: 1rem;
    line-height: 2.2rem;
    color: #f74646;
    margin-right: 2.4rem;
    margin-top: 8px;
`;