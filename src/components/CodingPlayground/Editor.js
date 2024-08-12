import { Editor } from '@monaco-editor/react';
import './EditorStyle.css';

function CodeEditor({ code, setCode, codelang }) {
  const editorOptions = {
    selectOnLineNumbers: true,
    fontSize: 16,
    minimap: { enabled: false },
    lineNumbers: "on",
    scrollBeyondLastLine: false,
  };

  return (
    <div className="editor-container">
      <Editor
        height="80vh"
        width="100%" 
        language={codelang}
        value={code}
        onChange={(value) => setCode(value)}
        options={editorOptions}
        theme="vs-dark" 
      />
    </div>
  );
}

export default CodeEditor;
