import React from 'react';
import './App.css';
 
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

  incrementMe = () => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })

  }
  render() {
    const { DataisLoaded, items } = this.state;
 
    if (!DataisLoaded) {
      return <div>Loading...</div>;
    }
    else {
 
   
    return (
      <div className="App">
        <div class="container">
          {items.map(item =>(
            <div class="box">
              <img src={item.url} class="spaceimg"></img>
              <h4 class="title">@{item.title}</h4>
              <h6 class="date">{item.date}</h6>
              <p class="info">{item.explanation}</p>
              <div>
                <button onClick={this.incrementMe}>❤️</button>
                Likes: {this.state.count}
              </div>
            </div>

          ))} 
        </div>
        
      </div>
    )
   
}
  }
}
export default App;
 
