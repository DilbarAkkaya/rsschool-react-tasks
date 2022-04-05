import React, { SyntheticEvent } from 'react';
import { FileProps } from '../../types';

class FileInput extends React.Component<FileProps> {
  constructor(props: FileProps) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }
  fileSelectHandler(event: SyntheticEvent<HTMLInputElement>) {
    console.log((event.target as HTMLInputElement)?.files?.[0]);
    this.setState({ selectedFile: (event.target as HTMLInputElement)?.files?.[0] });
  }
  render() {
    const { refInput } = this.props;
    return (
      <>
        <label className="text-field__label" htmlFor="file">
          Upload file:
        </label>
        <input
          id="file"
          type="file"
          ref={refInput}
          onChange={this.fileSelectHandler}
          className="text-field__label"
        />
      </>
    );
  }
}

export default FileInput;
