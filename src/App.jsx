import logo from './logo.svg';
import styled from '@emotion/styled'
import React,{useState} from 'react';
import Quote from './components/Quote.jsx'

const ButtonP = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

function App() {
  
  //State of quotes
  const [quote, newQuote] = useState({});
  
  const callAPI = async () => {
    
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const phrase = await api.json();
    newQuote(phrase[0]);
  }
  
  return (
    <Container>
      <Quote quote={quote}/>
      <ButtonP onClick={callAPI}>
        New Quote
      </ButtonP>
    </Container>
  );
}

export default App;
