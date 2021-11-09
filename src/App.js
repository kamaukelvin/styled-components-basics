
import {Button} from './components/Button'
import {Header,Nav} from './components/Header'
import {Card} from './components/Card'
import {Flex} from './components/Flex'
import {GlobalStyles} from './GlobalStyles.style'
import {ThemeProvider} from 'styled-components'
import styled from 'styled-components'
import content from './content'

const theme= {
  lightMode:{
    header:'#ebfbff',
    body:'#ddd',
    footer:"#fff"
  },
  mobile:'768px'
}

// changing a styled component property

const ModifiedFlex = styled(Flex)`
justify-content:space-between;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <Header>
    <Nav/>
    </Header>
    <Button backgroundColor="red">Hello</Button>

    <ModifiedFlex>
<h1>We are the gifted</h1><p>Hello Hello</p>
    </ModifiedFlex>
    {content.map(((card,index)=><Card key={index} card={card} layout={card.id % 2===0 &&'row-reverse'} />))}
    </ThemeProvider>
  );
}

export default App;
