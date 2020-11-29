import React, { useState } from 'react';
import { Controlled as CodeMirrorEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons'

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

// import CodeMirror from 'react-codemirror2';
import ('codemirror/mode/xml/xml');
import ('codemirror/mode/javascript/javascript');
import('codemirror/mode/css/css');



export default function Editer(props) {
    const { displayName , language, value , onChange} = props;
    const [isOpen, setIsOpen] = useState(true);
    const elementOpen = <FontAwesomeIcon icon={faArrowsAltH} />
    function handleChange(editor, data, value) {
        onChange(value);
    }
	return (
		<>
			<div className={`editor-container open-${isOpen}`}>
				<div className="editor-title">
					{displayName}
					<button onClick={() => setIsOpen(!isOpen)}>
                        {elementOpen}
                    </button>
				</div>
                <CodeMirrorEditor
						// value={this.state.value}
						// options={options}
						// onBeforeChange={(editor, data, value) => {
						// 	this.setState({ value });
						// }}
                        // onChange={(editor, data, value) => {}}
                        onBeforeChange={handleChange}
                        value={value}
                        className="code-mirror-wrapper"
                        options={{ 
                            /** Whether CodeMirror should scroll or wrap for long lines. Defaults to false (scroll). */
                            lineWrapping: true,
                             /** Optional lint configuration to be used in conjunction with CodeMirror's linter addon. */
                            lint: true,
                            /** string|object. The mode to use. When not given, this will default to the first mode that was loaded.
                            It may be a string, which either simply names the mode or is a MIME type associated with the mode.
                            Alternatively, it may be an object containing configuration options for the mode,
                            with a name property that names the mode (for example {name: "javascript", json: true}). */
                            mode: language, /* xml or css or js ...*? */
                            theme: "material",
                            lineNumber: true,
                            
                        }}
					/>
			</div>
		</>
	);
}
