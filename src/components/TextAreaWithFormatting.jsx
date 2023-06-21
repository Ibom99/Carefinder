import React from 'react'
import { Editor } from "react-draft-wysiwyg";
import './TextAreaWithFormatting.css'


const TextAreaWithFormatting = ({ editorState, onEditorStateChange }) => {
  return (
    <div className='textarea-container'>
      <Editor
        wrapperClassName='wrapper'
        editorClassName='editor'
        toolbarClassName='toolbar'
        onEditorStateChange={onEditorStateChange}
        editorState={editorState}
      />
    </div>
  )
}

export default TextAreaWithFormatting
