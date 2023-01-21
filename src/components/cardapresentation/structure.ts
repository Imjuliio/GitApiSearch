import styled from "styled-components";


export const Container = styled.div`
  
  width: 130%;
  padding: 3rem 2.4rem;
  background: ${(props) => props.theme.colors.card};

  border-radius: 1.5rem;
  margin-top: 1.6rem;
  max-width: 73.3rem;
  box-shadow: 0px 16px 30px -10px rgba(191, 197, 230, 0.199); 
  display: flex;

  @media (min-width: 768px) {
    padding: 5.2rem 4.8rem;
  }

  @media (min-width: 900px) {
    padding: 4.8rem;
  }

  a {
    all: unset;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
    
`;

export const Pfp = styled.img`
  height: 237px;
  width: 217px;
  border-radius: 50%;
   margin-right: 2.7rem;
   display: none;

  @media (min-width: 900px) {
     display: block;
   }
   
`;


export const SideArea = styled.div`
 
`;

export const Modalicon = styled.div`

 
 img{
    height: 30px;
    cursor: pointer;
    margin-top: 0.8em;
 }
`;

export const ModaLinformation = styled.div`

background: radial-gradient(circle, rgba(30,29,51,1) 0%, rgba(230,221,255,1) 100%);
 padding: 9px 19px 9px;
 border-radius: 22px;
 margin: 4em;
 height: 532px;
`;