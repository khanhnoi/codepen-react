import React from 'react';
import { Controlled as CodeMirrorEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

// import CodeMirror from 'react-codemirror2';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
// require('codemirror/mode/css/css');

export default function Editer(props) {
    const { displayName , language, value , onChange} = props;
    function handleChange(editor, data, value) {
        onChange();
    } 
	return (
		<>
			<div className="editor-container">
				<div className="editor-title">
					{displayName}
					<button>O/C</button>
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
                            lineNumber: true,
                            theme: "material"
                        }}
					/>
			</div>
		</>
	);
}
