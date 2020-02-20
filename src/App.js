import React from 'react';

import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import Technical from './Components/Technical'
import Expereince from './Components/Expereince'

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
      },
      expereinces: [
        {
          name: 'Wip Camp#10',
          link: ['https://github.com/wipcamp/10-frontend'],
          detail: 'Create website for IT Camp of the School of Information Technology at KMUTT.',
          position: 'Front-end Developer(CSS)',
          developed: 'React(Next.js) , Styled-components',
        },
        {
          name: 'KMUTT Passport',
          link: ['https://github.com/alchemist-itbangmod/passport2018'],
          detail: 'Create website for managing activity in KMUTT.',
          position: 'Front-end Developer',
          developed: 'React(Next.js) , Styled-components, Axios, Bootstrap',
        },
        {
          name: 'Wip Camp#11',
          link: ['https://github.com/wipcamp/11-line-chatbot'],
          detail: 'Create LINE chat bot for register IT Camp of the School of Information Technology at KMUTT.',
          position: 'Front-end Developer',
          developed: 'ReactJS, Styled-components, Axios, Bootstrap, Dialogflow, LINE API',
        },
        {
          name: 'Internship at Innovasive Co., Ltd. (July 2019)',
          link: ['https://github.com/wipcamp/10-frontend', 'https://github.com/panupongjkn/be_booking'],
          detail: 'Create website for booking sign in KMUTT.',
          position: 'Front-end and Back-end Developer',
          developed: 'ReactJS, Styled-components, Axios, Bootstrap, Golang(Echo)',
        },
      ]
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
        <div className='container py-5'>
          <Expereince expereinces={profile.expereinces} />
        </div>
      </div>
    );
  }
}

export default App;
