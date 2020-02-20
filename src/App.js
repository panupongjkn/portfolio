import React from 'react';

import Navbar from './Components/Navbar'
import Profile from './Components/Profile'

class App extends React.Component {
  render() {
    let profile = {
      img: '/img/profile.jpg',
      name: 'Panupong Joknoi',
      email: 'paupongjoknoi2000@gmail.com',
      github: 'panupongjkn',
      facebook: 'jknxp',
      birthday: {
        date: 10,
        month: 'February',
        year: 2000
      },
      religion: 'Buddhist',
      nationality: 'Thai',
      hobbies : 'Playing football, Playing game, Watching movie and serie',
      technical : {
        language : ['HTML', 'CSS', 'Javascript', 'Go', 'SQL'],
        frameworkLibrary : ['ReactJS', 'Bootstrap', 'Echo'],
        tools : ['SourceTree', 'Git', 'NodeJS', 'Visual Studio Code', 'Figma']
      }
    }
    return (
      <div className="App">
        <Navbar title={'Portfolio'} />
        <div className='container'>
          <div className='mt-5'>
            <Profile profile={profile} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
