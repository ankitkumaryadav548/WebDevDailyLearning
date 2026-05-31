// useRef is a React Hook that allows you to:

// Access and manipulate DOM elements directly
// Store a value that persists between renders without causing re-renders
import { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>
    </div>
  );
}


