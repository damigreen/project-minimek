import React, { Component } from 'react';
import TabBarContainer from '../../features/tabs/TabBarContainer';
import UnitInfo from '../../features/unitInfo/UnitInfo';
import Pilots from '../../features/pilots/Pilots/';
import Mechs from '../../features/mechs/Mechs/';
import UnitOrganization from '../../features/unitOrganization/UnitOrganization';
import Tools from '../../features/tools/Tools/';

import './App.css';
import logo from './logos.svg';

import {
  Header,
  Container,
} from 'semantic-ui-react'

class App extends Component {
    
    render() {
        const tabs = [
            { name: 'unit info', label: 'Unit Info', component: UnitInfo },
            { name: 'pilots', label: 'Pilots', component: Pilots },
            { name: 'mechs', label: 'Mechs', component: Mechs },
            { name: 'unit organization', label: 'Unit Organization', component: UnitOrganization },
            { name: 'tools', label: 'Tools', component: Tools }
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
        </div>
        )
    }
}

export default App;
