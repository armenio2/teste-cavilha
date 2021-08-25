import './App.css';
import Text  from "@cavilha/text"
import Box from '@cavilha/box';
import { styled } from '@cavilha/theme';

const Foo = styled('div', {
    p: '$small2',
    fontWeight: '$bold',
    fontSize: '$xlarge3',
    lineHeight: '$medium2',
})

function App() {
  return (
    <div className="App">
      <Box>
      <Text as="h1" textStyle="hero">Exemplo de Texto</Text>
      </Box>
      <Foo>
        <p>fooooo</p>
      </Foo>
    </div>
  );
}

export default App;
