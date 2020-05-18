import React, { Component } from 'react'

import TabBar from './TabBar'

export default class TabBarContainer extends Component {
  constructor(props) {
    super(props)

    const { tabs = [{ name: null }] } = props
    
    const firstTab = tabs[0]
    // console.log(firstTab)
  

    this.state = {
      currentTab: firstTab.name
    }
    // console.log(this.state)
    // this.onTabClick = this.onTabClick.bind(this)
  }

  onTabClick = (name) => {
    this.setState({currentTab: name})
  }

  render () {
    let { tabs,  ...otherProps } = this.props
    let {currentTab} = this.state

    return (
        <TabBar
          {...otherProps}
          currentTab={currentTab}
          onTabClick={this.onTabClick}
          tabs={tabs} />
      )
  }
}