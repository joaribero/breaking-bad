import styled from '@emotion/styled'
import React,{useState, useEffect} from 'react';
import Quote from './components/Quote.jsx'

const ButtonP = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
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

  //Load a quote
  useEffect(() => {
    callAPI();
  }, []);
  
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
