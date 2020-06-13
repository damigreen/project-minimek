import React, { Component } from 'react';
import TabBarContainer from '../../features/tabs/TabBarContainer';
import UnitInfo from '../../features/unitInfo/UnitInfo/';
import Pilots from '../../features/pilots/Pilots/';
import Mechs from '../../features/mechs/Mechs/';
import Tools from '../../features/tools/Tools/';
import ModalManager from '../../features/modals/modalManager';
import ContextMenuManager from '../../features/contextMenu/ContextMenuManager'

import './App.css';
import logo from './logos.svg';

import {
  Header,
  Container,
} from 'semantic-ui-react'


class App extends Component {

    render() {
        const tabs = [
            { name: 'unitInfo', label: 'Unit Info', component: UnitInfo },
            { name: 'pilots', label: 'Pilots', component: Pilots },
            { name: 'mechs', label: 'Mechs', component: Mechs },
            { name: 'tools', label: 'Tools', component: Tools }
        ]
                
        return (
        <div className="App">
            <ModalManager />
            <ContextMenuManager />
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
