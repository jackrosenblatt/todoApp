import React from 'react';

class InputLine extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <form>
        <div className='form-group'>
          <div className='input-group'>
            <input type='text'></input>
            <div className='btn btn-primary addButton' onClick={() => this.props.submit('Test Task')} type='submit'>Add todo</div>
          </div>
        </div>
      </form>
    )
  }
}

export default InputLine;