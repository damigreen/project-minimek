import React, { Component } from 'react';
import SampleComponent from './SampleComponent';
import TabBarContainer from './features/tabs/TabBarContainer';

import './App.css';
import logo from './logos.svg'

import {
  Header,
  Container,
} from 'semantic-ui-react'

const UnitInfo = () => <div> Unit info content</div>
const Pilots = () => <div>Pilots content</div>
const Mechs = () => <div>Mechs content</div>
const UnitOrganization = () => <div>Unit Organization content</div>

class App extends Component {
    
    render() {
        const tabs = [
            { name: 'UnitInfo', label: 'Unit Info', component: UnitInfo },
            { name: 'pilots', label: 'Pilots', component: Pilots },
            { name: 'mechs', label: 'Mechs', component: Mechs },
            { name: 'UnitOrganization', label: 'Unit Organization', component: UnitOrganization }
        ]

        return (
        <div className="App">
            <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <Header inverted as="h1">Mini-MekHQ</Header>
        </div>
        <Container>
            <TabBarContainer tabs={tabs} size='massive' />
        </Container>
        <SampleComponent />
        </div>
        )
    }
}

export default App;
