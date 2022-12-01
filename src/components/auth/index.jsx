import { TabPanel, Tabs, Tab, TabList } from 'react-tabs';
import Login from './components/login';
import Register from './components/register';
import { useAuth } from './components/useAuth';

function Authentication () {
    const { loginForm,
        registerForm } = useAuth()
    return (
        <div className="main">
            <div className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17" style={{ backgroundImage: `url(images/backgrounds/login-bg.jpg)` }}>
                <div className="container">
                    <div className="form-box">
                        <div className="form-tab">
                            <Tabs selectedTabClassName="show" defaultIndex={0}>
                                <TabList className="nav nav-pills nav-fill">
                                    <Tab className="nav-item" >
                                        <span className="nav-link">Sign In</span>
                                    </Tab>
                                    <Tab className="nav-item">
                                        <span className="nav-link">Register</span>
                                    </Tab>
                                </TabList>
                                <div className="tab-content">
                                    <TabPanel style={{ paddingTop: "2rem" }}>
                                        <Login loginForm={loginForm} />
                                    </TabPanel>
                                    <TabPanel style={{ paddingTop: "2rem" }}>
                                        <Register registerForm={registerForm} />
                                    </TabPanel>

                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Authentication;