import React from 'react';
import styled from '@emotion/styled';

const QuoteContainer = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: rgba(255,255,255,0.5);
    max-width: 800px;
    margin: 5rem;

    @media (min-width: 992px) {
        margin-top: 5rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10 rem;
            color: black;
            position:absolute;
            left: -1rem;
            top: -2rem;
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.6rem;
        text-align: right;
        color: #666;
        margin-top: 2rem;
        font-weight: bold;
    }
`;


const Quote = ({quote}) => {
    
    if (Object.keys(quote).length === 0) return null;

    return ( 
        <QuoteContainer>
            <h1>{quote.quote}</h1>
            <p>{quote.author}</p>
        </QuoteContainer>      
     );
}
 
export default Quote;
