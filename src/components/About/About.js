import React from 'react';
import { Menu } from 'antd';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import AboutMe from './AboutMe';
import AboutMyTeam from './AboutMyTeam';


function About() {
    return (
        <div>
            <h1>About page</h1>
            <div className="About">
                <div className='about-nav'>
                    <Menu defaultSelectedKeys={['1']} mode="horizontal" >
                        <Menu.Item key="1"><Link to="/about/me">About me</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/about/my-team">About my team</Link></Menu.Item>
                    </Menu>
                </div>
                <div className='App-content'>
                    <Switch>
                        <Route path='/about/me' component={AboutMe} />
                        <Route path='/about/my-team' component={AboutMyTeam} />
                        <Redirect from='/about' to='/about/me' />
                    </Switch>
                </div>
            </div>
        </div >
    );
}

export default About;