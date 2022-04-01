import React from 'react';

class FileInput extends React.Component {
  fileInput: React.RefObject<HTMLInputElement>;
  constructor(props: File) {
    super(props);
    this.fileInput = React.createRef();
  }

  render() {
    return (
      <label className="text-field__label">
        Upload file:
        <input type="file" ref={this.fileInput} />
      </label>
    );
  }
}

export default FileInput;
