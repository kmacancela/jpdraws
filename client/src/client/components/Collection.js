import React, {Fragment} from 'react'
import Drawing from './Drawing'

class Collection extends React.Component {

  render(){
    // console.log(this.props.specsMethod)
    return (
      <Fragment>
        { this.props.drawings.map((drawing, idx) => {
          return <Drawing key={idx} drawing={ drawing } specsMethod={ this.props.specsMethod } />
        }) }
      </Fragment>
    )
  }
}
export default Collection
