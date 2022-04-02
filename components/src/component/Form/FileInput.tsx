import React, { SyntheticEvent } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class FileInput extends React.Component<any, any> {
  //fileInput: React.RefObject<HTMLInputElement>;
  constructor(props: File) {
    super(props);
    //this.fileInput = React.createRef();
  }
  fileSelectHandler(event: SyntheticEvent<HTMLInputElement>) {
    console.log(event);
  }
  render() {
    const { refInput } = this.props;
    return (
      <label className="text-field__label">
        Upload file:
        <input type="file" ref={refInput} onChange={this.fileSelectHandler} />
      </label>
    );
  }
}

export default FileInput;
