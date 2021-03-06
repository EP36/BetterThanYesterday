import { useEffect, useRef } from 'react';
import { Editor } from 'react-image-markup';

export default function ImageEditor() {
  const editorRef = useRef();

  useEffect(() => {
    editorRef.current.set(editorRef.mode, editorRef.options)
  }, [])

  return (
    <div>
      <Editor height="700" width="700" ref={editorRef} />
    </div>
  )
};