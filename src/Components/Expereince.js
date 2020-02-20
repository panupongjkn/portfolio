import React from 'react'

const CheckBE = (props) => {
    console.log(props.link.length)
    if (props.link.length != 1) {
        return (
            <div>
                <a href={props.link[0]} class="btn btn-dark col">Font-end</a>
                <a href={props.link[1]} class="btn btn-dark col mt-2">Back-end</a>
            </div>
        )
    } else {
        return <a href={props.link[0]} class="btn btn-dark col">Font-end</a>
    }
}

const Card = (props) => {
    return (
        <div class="card mb-3" style={{minHeight: '250px' }}>
            <div class="card-body">
                <div className='mb-3'>   
                    <h5 class="card-title">{props.exp.name}</h5>
                    <p class="card-text">{props.exp.detail}</p>
                </div>
                <CheckBE link={props.exp.link} />
            </div>
        </div>
    )
}
const Expereince = (props) => {
    return (
        <div>
            <h4 className={'text-center'}>My Expereince</h4>
            {/* <TechnicalList name={'Languages'} list={technicals.languages} />
            <TechnicalList name={'Framework & Library'} list={technicals.frameworkLibrarys} />
            <TechnicalList name={'Tools'} list={technicals.tools} /> */}
            <div className='row'>
                {props.expereinces.map((expereince) => {
                    return <div className='col-6 col-sm-3'><Card exp={expereince} /></div>
                })}
            </div>
        </div>
    )
}

export default Expereince