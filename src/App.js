import React from 'react';

import Navbar from './Components/Navbar'
import Profile from './Components/Profile'

class App extends React.Component {
  render() {    let profile = {
    img : '/img/profile.jpg',
    name: 'Panupong Joknoi',
  }
    return (
      <div className="App">
        <Navbar title={'Portfolio'} />
        <Profile profile={profile}/>
      </div>
    );
  }
}

export default App;
