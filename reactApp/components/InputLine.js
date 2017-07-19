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
            <button className='btn btn-primary addButton' type='submit'>Add todo</button>
          </div>
        </div>
      </form>
    )
  }
}

export default InputLine;