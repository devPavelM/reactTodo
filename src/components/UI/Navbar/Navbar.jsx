import React from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = React.useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className='navbar'>
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
            <div className='navbar__links'>
                <Link className='navbar__links__item' to='/about'>О сайте</Link>
                <Link className='navbar__links__item' to='/posts'>Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;