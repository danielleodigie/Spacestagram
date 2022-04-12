import React from 'react';
import './App.css';
import Particles from "react-tsparticles";
{/*import LikeBtn from "./LikeBtn";*/}

class LikeBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: 0 };
  }

  inc = () => {
    this.setState(prvState => ({
      likes: prvState.likes + 1
    }));
  };

  render() {
    return (
      <>
        <button onClick={e => this.inc()} className="click">Kudos {this.state.likes}</button>
      </>
    );
  }
}

class App extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }
 
  
 
  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=qoXEZ8VFBwU4mhb4XKpFWQ4bMWuLhbWbtNvc2MVb&count=10')
    .then(res => res.json())
    .then(json => {
      this.setState({
        DataisLoaded: true,
        items: json,
      });
    })
  }

  
  render() {
    const { DataisLoaded, items } = this.state;
 
    if (!DataisLoaded) {
      return (<div><img src="images/loading.gif"></img></div>)
    }
    else {
 
   
    return (
      
                
      <div className="App">
        <header>
          <h1 id='header'>spacestagram</h1>

        </header>
        <div class="container">
          {items.map(item =>(
            <div class="box">
              <img src={item.url} class="spaceimg"></img>
              <h4 class="title">@{item.title}</h4>
              <h6 class="date">{item.date}</h6>
              <p class="info">{item.explanation}</p>
              <div class="button"><LikeBtn/></div>
              
            </div>

          ))} 
        </div>
        
      </div>
    )
   
}
  }
}
export default App;
 
