import React from 'react'

const Card = (props) => {
    return (
        <div className="card pt-1" style={{ height: '200px' }}>
            <img className="card-img-top" style={{ objectFit: 'contain', height: '150px' }} src={`/img/${props.technical}.png`} alt={props.technical} />
            <div className="card-body">
                <p className="card-text text-dark text-center">{props.technical}</p>
            </div>
        </div>
    )
}

const TechnicalList = (props) => {
    return (
        <div className='row pt-5'>
            <h5>{props.name}</h5>
            <div className='row mx-auto'>
                {props.list.map((tectnical) => {
                    return <div className='col-6 col-sm-3 p-2 '><Card technical={tectnical} /></div>
                })}
            </div>
        </div>
    )
}
const Technical = (props) => {
    let technicals = props.technicals
    return (
        <div>
            <h4 className={'text-center'}>My Technical</h4>
            <TechnicalList name={'Languages'} list={technicals.languages} />
            <TechnicalList name={'Framework & Library'} list={technicals.frameworkLibrarys} />
            <TechnicalList name={'Tools'} list={technicals.tools} />
        </div>
    )
}

export default Technical