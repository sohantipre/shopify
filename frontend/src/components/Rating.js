import React from 'react'


const Rating = ({value}) => {
    return (
        <div>
            <i style={{color:'yellow'}} className={
                value>=1?'fas fa-star'
                :value>=0.5
                ?'fa-star-half-alt'
                :'far fa-star'}>

            </i>
            <i  style={{color:'yellow'}} className={
                value>=2?'fas fa-star'
                :value>=1.5
                ?'wfa-star-half-alt'
                :'far fa-star'}>

            </i>
            <i  style={{color:'yellow'}} className={
                value>=3?'fas fa-star'
                :value>=2.5
                ?'fa-star-half-alt'
                :'far fa-star'}>

            </i>
            <i style={{color:'yellow'}} className={
                value>=4?'fas fa-star'
                :value>=3.5
                ?'fa-star-half-alt'
                :'far fa-star'}>

            </i>
            <i  style={{color:'yellow'}} className={
                value>=5?'fas fa-star'
                :value>=4.5
                ?'fa-star-half-alt'
                :'far fa-star'}>

            </i>
        </div>
    )
}

export default Rating
