import React from 'react'
import Styled from 'styled-components'

const CardDetail = Styled.div`
   height : 3em;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 2;
`
const CardTitle = Styled.div`
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 1;
`

const CheckBE = (props) => {
    if (props.link.length !== 1) {
        return (
            <div className='col-12'>
                <div className='row'>
                    <div className='col-12 col-sm-6 p-0 pr-sm-1'>
                        <a href={props.link[0]} class="btn btn-dark col-12">Front-end</a>
                    </div>
                    <div className='col-12 col-sm-6 p-0 pl-sm-1 pt-1 pt-sm-0'>
                        <a href={props.link[1]} class="btn btn-dark col-12">Back-end</a>
                    </div>
                </div>
            </div>
        )
    } else {
        return <a href={props.link[0]} class="btn btn-dark col">Front-end</a>
    }
}

const Card = (props) => {
    return (
        <div class="card mb-3" style={{ minHeight: '150px' }}>
            <div class="card-body">
                <div className='mb-3'>
                    <h5><CardTitle class="card-title">{props.exp.name}</CardTitle></h5>
                    <CardDetail class="card-text">{props.exp.detail}</CardDetail>
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
            <div className='row pt-5'>
                {props.expereinces.map((expereince) => {
                    return <div className='col-12 col-sm-3'><Card exp={expereince} /></div>
                })}
            </div>
        </div>
    )
}

export default Expereince