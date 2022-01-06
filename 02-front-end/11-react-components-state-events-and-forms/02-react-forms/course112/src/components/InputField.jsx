import React from 'react';

class InputField extends React.Component {

  render() {
    return (
      <div>
        <label for="name" className="form-label">Nome:</label>
        <input name="name" type="text" id="name" className="form-control form-control-lg" maxlength="40" required />
      </div>
    );
  }
}

export default InputField