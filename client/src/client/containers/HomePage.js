import React from 'react'
import Header from './Header'
import Collection from '../components/Collection'

export default class HomePage extends React.Component {
  render(){
    return(
      <>
        <Header resetSpecs={this.props.resetSpecs} specs={this.props.specs} specsMethod={this.props.specsMethod} logOut={this.props.logOut} user={this.props.user}/>
        <Collection drawings={ this.props.drawings } specsMethod={ this.props.specsMethod } />
      </>
    )
  }
}
