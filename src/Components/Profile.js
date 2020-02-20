import React from 'react'

const ImgProfile = (props) => {
    return (
        <img src={props.src} alt={'Profile'} width={'100%'} className='rounded-circle' />
    )
}

const Profile = (props) => {
    let profile = props.profile
    return (
        <div>
            <div className='col-6 col-sm-2 mx-auto'>
                <ImgProfile src={profile.img} />
            </div>
            <div className='text-center'>
                <h3>{profile.name}</h3>
            </div>
        </div>
    )
}

export default Profile