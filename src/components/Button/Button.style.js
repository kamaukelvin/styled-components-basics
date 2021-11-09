import styled from 'styled-components/macro' //import using macro to  provide the html tag in browser with kinda meaninful classnames which is really helpful for debugging
import {StyledButton} from './StyledButton.js'

export const Button = styled(StyledButton)`
width: 200px;
height:50px;
color:white;
background-color: ${({backgroundColor}) =>backgroundColor ||'#333'};

&:hover{ //on hover effect
    background-color:blue;

    & label { //style to the label is effected on hover
        color:yellow;
        font-weight:bold;
    }
}
`

