import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body,html :root{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    /* align-items: ;
    justify-content: center; */
    background: linear-gradient(0deg, rgba(41,41,41,1) 0%, rgba(0,7,31,0.9920343137254902) 100%);;
    padding: 3.1rem 2.4rem;
 
  @media (min-width: 768px) {
    padding: 3.1rem 7rem;
  }
    }

    body, 
    input, 
    button, 
    textarea, 
    select {
      font-family: 'Poppins', sans-serif;

    }
   
   a{
     inline-size: none;
     text-decoration: none;
     color: #fff;
   }
  
  .iconimage{
    height: 30px;
    margin-top: 0.9em;
  }

  .backgroundModal{
     height: 300px;
     border-radius: 22px;
     margin-left: 13em;
  }

  h1{
     font-size: 25px;
     color: rgba(30,29,51,1);
     margin-left: 10em; 
     margin-top: 1em;
  } 
  
 h6{
    margin-top: 9em;
    margin-left: 8em;
 }
`;