import React, { SyntheticEvent } from 'react';
import { FileProps } from '../../types';

class FileInput extends React.Component<FileProps> {
  constructor(props: FileProps) {
    super(props);
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
