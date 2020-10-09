import React from 'react'
import HeaderLogo from './AllOfComponents.js/HeaderLogo'
import HeaderCall from './AllOfComponents.js/HeaderCall'
import './css/Header.css'
import HeaderContainer from './AllOfComponents.js/HeaderContainer'
import HeaderGrid from './AllOfComponents.js/HeaderGrid'

function Header() {
    return (
        <div className='bg'>
            <div className='header p-3'>
                <HeaderLogo className='box1' />
                <HeaderCall className='box2' />
            </div>
            <div className='grid'>
                <HeaderContainer className='grodZero'/>
                <HeaderGrid />
            </div>
        </div>
    )
}

export default Header
