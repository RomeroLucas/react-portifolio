import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import WorkIcon from '@material-ui/icons/Work';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

import './header.css'

const navlist = [
    {text : 'home', local : '/', navIcon : <HomeIcon className='icons'/>},
    {text : 'sobre mim', local : '/sobre-mim', navIcon : <AccountBoxIcon className="icons" />},
    {text : 'trabalhos', local : '/trabalhos', navIcon : <WorkIcon className="icons" />},
    {text : 'contatos' , local: '/contatos', navIcon : <PhoneIphoneIcon className="icons" />},
]


export default function Header() {
        return (
            <>
            <header className="desktop-flex mobile-none">
                <h3>Frontend Developer</h3>
                <span>   
                    {navlist.map(item => {return <Link key={item.text} to={item.local} exact><div className="nav-item">{item.text}</div></Link>})}
                </span>
            </header>
            <header className="mobile-flex desktop-none">
                <h3>Frontend Developer</h3>
                <span>   
                    {navlist.map(item => {return <Link key={item.text} to={item.local} exact><div className="nav-item">{item.navIcon}<br />{item.text}</div></Link>})}    
                </span>
            </header>
            </>
        )
}