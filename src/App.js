import React from 'react';

class App extends React.Component {
  state =  { textBoxInput: "", randomTeks: "" }

  randomPict = () => {
    this.setState ({
      randomTeks: this.state.textBoxInput
    })
  }

  display() {
    return (
      <img className="rounded-circle bg-white my-4 mx-auto" src={`https://robohash.org/${this.state.randomTeks}.png`}/>
    )
  }

  render() {
    return(
      <React.Fragment>
        <div className="container text-center p-5">
          <input type="text" className="form-control w-25 mx-auto my-3" placeholder="Type your name..." onChange={(e) => { this.setState({ textBoxInput: e.target.value}) } }></input>
          <button type="button" className="btn btn-success" onClick={ this.randomPict }>Buat Profil Picture!</button>
          <div className="row">
            <div className="col-lg-12 text-center"></div>
              {this.state.randomTeks && this.display()}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default App;