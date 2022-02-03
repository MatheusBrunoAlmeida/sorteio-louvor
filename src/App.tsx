import React, { useState } from 'react';
import { Box, CardTomTitle, CardTom, Title, ButtonSortearTom } from './style';

function App() {
  const [tom, setTom] = useState('Tom')
  const [tomSorteio, setTomSorteio] = useState({})

  const tons = [
    {
      id: 1,
      tom: 'C'
    },
    {
      id: 2,
      tom: 'C#'
    },
    {
      id: 3,
      tom: 'D'
    },
    {
      id: 4,
      tom: 'Eb'
    },
    {
      id: 5,
      tom: 'E'
    },
    {
      id: 6,
      tom: 'F'
    },
    {
      id: 7,
      tom: 'F#'
    },
    {
      id: 8,
      tom: 'G'
    },
    {
      id: 9,
      tom: 'G#'
    },
    {
      id: 10,
      tom: 'A'
    },
    {
      id: 11,
      tom: 'Bb'
    },
    {
      id: 12,
      tom: 'B'
    },
  ]

  function sortearTom(){
    const tomSortear = Math.floor(Math.random() * 12);
    console.log(tomSortear)

    let resultado = tons.find(tom => tom.id == tomSortear)

    defineTom(resultado)
  }

  function defineTom(resultado:any){
    setTom(resultado.tom)
  }


  return (
      <Box>
        <Title>Sorteio Louvor</Title>

        <CardTom>
          <CardTomTitle> {tom} </CardTomTitle>
        </CardTom>

        <ButtonSortearTom onClick={sortearTom}>Sortear Tom</ButtonSortearTom>
      </Box>
  );
}

export default App;
