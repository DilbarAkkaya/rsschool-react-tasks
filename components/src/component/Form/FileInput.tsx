import React from 'react';
import { FileProps } from '../../types';

class FileInput extends React.Component<FileProps> {
  constructor(props: FileProps) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }
  render() {
    const { refInput } = this.props;
    return (
      <>
        <label className="text-field__label" htmlFor="file">
          Upload file:
        </label>
        <input id="file" type="file" ref={refInput} className="text-field__label" />
      </>
    );
  }
}

export default FileInput;
