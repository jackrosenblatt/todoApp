import React from 'react';

class InputLine extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      typedText: ''
    }
  }

  handleTypeing(e){
    this.setState({typedText: e.target.value})
  }

  handleSubmit(){
    this.props.submit(this.state.typedText);
    this.setState({typedText: ''})
  }

  handleFormSubmit(e){
    e.preventDefault();
    this.handleSubmit()
  }

  render(){
    return (
      <form onSubmit={(e) => this.handleFormSubmit(e)}>
        <div className='form-group'>
          <div className='input-group'>
            <input type='text' value={this.state.typedText} onChange={(e) => this.handleTypeing(e)}></input>
            <div className='btn btn-primary addButton' onClick={() => this.handleSubmit()} type='submit'>Add todo</div>
          </div>
        </div>
      </form>
    )
  }
}

export default InputLine;