import React from 'react'

const ImgProfile = (props) => {
    return (
        <img src={props.src} alt={'Profile'} width={'100%'} className='rounded-circle' />
    )
}

const ListContact = (props) => {
    return (
        <div className='row'>
            {props.contacts.map((contact) => {
                return (
                    <div className='col-6 col-sm-3 mb-2 p-1'>
                        <a href={contact.link}>
                            <button type="button" style={{ width: '100%' }} class={'btn btn-dark'}>{contact.name}</button>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

const Info = (props) => {
    return (
        <div>
            <b>{props.name} : </b>{props.value}<br />
        </div>
    )
}
const GetAge = (year) => {
    let thisDay = new Date()
    return thisDay.getFullYear() - year
}
const Profile = (props) => {
    let profile = props.profile
    let contacts = [
        {
            name: 'E-mail',
            link: `mailto:${profile.email}?Subject=Hello%20${profile.name}`
        },
        {
            name: 'Telephone',
            link: `tel:${profile.tel}`
        },
        {
            name: 'Github',
            link: `https://github.com/${profile.github}`
        },
        {
            name: 'Facebook',
            link: `https://facebook.com/${profile.facebook}`
        }
    ]
    return (
        <div>
            <div className='col-6 col-sm-2 mx-auto'>
                <ImgProfile src={profile.img} />
            </div>
            <div className='text-center'>
                <h3>{profile.name}</h3>
                <div className='p-3'>
                    <Info name={'Date of Birth'} value={`${profile.birthday.date} ${profile.birthday.month} ${profile.birthday.year}`}/>
                    <Info name={'Age'} value={`${GetAge(profile.birthday.year)} years old`}/>
                    <Info name={'Religion'} value={profile.religion}/>
                    <Info name={'Nationality'} value={profile.nationality}/>
                    <Info name={'Hobbies'} value={profile.hobbies}/>
                </div>
                <ListContact contacts={contacts} />
            </div>
        </div>
    )
}

export default Profile