import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            mode="inline"
        >
            <Menu.Item key="1"><NavLink to="/" isActive={(e) => console.log('home', e)} activeClassName="selected">HOME</NavLink></Menu.Item>
            <Menu.Item key="2"><NavLink to="/about" isActive={(e) => console.log('about', e)} activeClassName="selected">About</NavLink></Menu.Item>
            <Menu.Item key="3"><NavLink to='/albums' isActive={(e) => console.log('albums', e)} activeClassName="selected">Albums</NavLink></Menu.Item>
        </Menu>
    );
}

export default Nav;