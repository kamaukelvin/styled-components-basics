// global styles for app

import  {createGlobalStyle} from 'styled-components/macro'  

export const GlobalStyles = createGlobalStyle`

@import url('your url here');

body{
   background-color: ${({theme}) => theme.lightMode.body};
    margin:0;
    padding:0;
}


`