import React, { useRef } from 'react';
import { FileProps } from '../../types';
import {useForm} from 'react-hook-form';

/* const FileInput = (props: FileProps) => {
 
   // const {refInput} = props;
   // const refff = refInput.current.focus()
    return (
      <>
        <label className="text-field__label" htmlFor="file">
          Upload file:
        </label>
        <input id="file" type="file" {...refInput} className="text-field__label" />
      </>
    );
  }

export default FileInput;  */

/* const FileInput = React.forwardRef(({register, ref}) => {
 // const {register, ...props} = props;
      <>
        <label className="text-field__label" htmlFor="file">
          Upload file:
        </label>
        <input id="file" type="file" register={register} ref={ref} className="text-field__label" />
         </>
      }
)
export default FileInput;   */
/* class FileInput extends React.Component<FileProps> {
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

export default FileInput;  */
