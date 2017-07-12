import React from 'react';
import {connect} from 'react-redux';
import {updateUserNevers} from '../actions/hungry';

export class NeverList extends React.Component {
    
      handleClick(e){
        e.preventDefault();
        this.props.dispatch(updateUserNevers());
        console.log('The link was clicked.'); 
      }
   
render() {

  return (
      <div className="buttons">
           <button type="button" id="button1">Yes</button>
           <button type="button" id="button2" onClick={(e)=> this.handleClick(e)}>No</button>
          
      </div>
    )

  }

}
export const mapStateToProps = (state) => ({
  nevers:state.nevers
});


export default connect(mapStateToProps)(NeverList);
