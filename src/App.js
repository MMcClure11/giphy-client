import './App.css';
import GiphListContainer from './containers/GiphListContainer'

function App() {
  return (
    <div className="App">
      <GiphListContainer />
    </div>
  );
}

export default App;

// import React, { Component } from 'react'

// export default class App extends Component {

//   componentDidMount(){
//     // fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=COI788NHznUTLid1ciKLW2cPSQ4voDn1`)
//     fetch(`https://api.giphy.com/v1/gifs/search?q=cats&api_key=COI788NHznUTLid1ciKLW2cPSQ4voDn1`)
//     .then(res => res.json())
//     .then(data => console.log(data))
//   }

//   //data I will want for each gif:
//   // <img src={giph.images.original.url} alt={giph.title} />

//   render() {
//     return (
//       <div className="App">
//         I am the APP
//       </div>
//     )
//   }
// }

