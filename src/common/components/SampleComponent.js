import React, { Component } from 'react'
import { connect }  from 'react-redux'

const mapStateToProps = state => ({
  data: state.test.data
})

class SampleComponent extends Component {
  render() {
    console.log(this.props)
    const data = this.props;

    return (
      <div>
        Data from redux {data.data}
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(SampleComponent)
