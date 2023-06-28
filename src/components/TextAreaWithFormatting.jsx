import React, { useState } from "react";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const TextAreaWithFormatting = ({onChange}) => {
// const [editorState, setEditorState] = useState("")

const handleTextChange = (value) => {
  console.log(value);
  onChange(value);
};

const modules = {
  toolbar:[
    [{header: [1,2,3,4,5,6, false]
    }],
    [{font: []}],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      {list: 'ordered'},
      {list: 'bullet'},
      {indent: '-1'},
      {indent: '+1'},
    ],
    ['link', 'image', 'video']

  ]
}

  return (
    <div>
      <ReactQuill theme="snow" onChange={handleTextChange} placeholder="Enter review..."
      modules={modules}/>
    </div>
  )
}

export default TextAreaWithFormatting











