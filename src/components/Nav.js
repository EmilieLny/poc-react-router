import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            mode="inline"
        >
            <Menu.Item key="1"><Link to="/">HOME</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/albums'>Albums</Link></Menu.Item>
        </Menu>
    );
}

export default Nav;