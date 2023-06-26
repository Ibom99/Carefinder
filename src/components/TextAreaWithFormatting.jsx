import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./TextAreaWithFormatting.css";

const TextAreaWithFormatting = ({ editorState, onEditorStateChange }) => {
  return (
    <div className="textarea-container">
      <Editor
        wrapperClassName="wrapper"
        editorClassName="editor"
        toolbarClassName="toolbar"
        toolbar={{
          blockType: {
            options: [
              "Normal",
              "H1",
              "H2",
              "H3",
              "H4",
              "H5",
              "H6",
              "Blockquote",
            ],
          },
          options: [
            "inline",
            "blockType",
            "fontSize",
            "fontFamily",
            "list",
            "textAlign",
            "colorPicker",
            "link",
            "embedded",
            "emoji",
            "image",
            "remove",
            "history",
          ],
        }}
        onEditorStateChange={onEditorStateChange}
        editorState={editorState}
      />
    </div>
  );
};

export default TextAreaWithFormatting;
