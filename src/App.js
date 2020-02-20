import React from 'react';

import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import Technical from './Components/Technical'

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
      hobbies: 'Playing football, Playing game, Watching movie and serie',
      technicals: {
        languages: ['HTML', 'CSS', 'Javascript', 'Go', 'SQL'],
        frameworkLibrarys: ['ReactJS', 'Bootstrap', 'Echo'],
        tools: ['SourceTree', 'Git', 'NodeJS', 'Visual Studio Code', 'Figma']
      }
    }
    return (
      <div className="App">
        <Navbar title={'Portfolio'} />
        <div className='container'>
          <div className='py-5'>
            <Profile profile={profile} />
          </div>
        </div>
        <div className='text-light bg-dark'>
          <div className='container py-5'>
            <Technical technicals={profile.technicals} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
