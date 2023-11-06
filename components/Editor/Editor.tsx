// import React, { useEffect, useRef } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "ckeditor5-build-classic-mathtype";

// interface CKeditorProps {
//     onChange: any;
//     editorLoaded: boolean;
//     name: any;
//     value: any;
// }

// export default function CKeditor({ onChange, editorLoaded, name, value }: CKeditorProps) {
//     const editorRef = useRef<{ CKEditor: typeof CKEditor; ClassicEditor: typeof ClassicEditor }>();
//     useEffect(() => {
//         editorRef.current = {
//             CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
//             ClassicEditor: require("ckeditor5-build-classic-mathtype"),
//         };
//     }, []);

//     return (
//         <>
//             {editorLoaded ? (
//                 <CKEditor
//                     editor={ClassicEditor}
//                     data={value}
//                     onChange={(event: any, editor: any) => {
//                         const data = editor.getData();
//                         onChange(data);
//                     }}
//                     config={{
//                         toolbar: {
//                             shouldNotGroupWhenFull: true,
//                             items: ["heading", "|", "bold", "italic", "bulletedList", "numberedList", "insertTable", "blockQuote", "undo", "redo", "|", "MathType", "ChemType"],
//                         },
//                     }}
//                     onReady={(editor) => {
//                         editor.editing.view.change((writer) => {
//                             writer.setStyle("min-height", "50vh", editor.editing.view.document.getRoot());
//                         });
//                     }}
//                 />
//             ) : (
//                 <div>Editor loading</div>
//             )}
//         </>
//     );
// }

import React, { useRef } from "react";
import { Editor as TextEditor } from "@tinymce/tinymce-react";

import $ from "jquery";
// Load wiris formula render script.
const jsDemoImagesTransform = document?.createElement("script");
jsDemoImagesTransform.type = "text/javascript";
jsDemoImagesTransform.src = "https://www.wiris.net/demo/plugins/app/WIRISplugins.js?viewer=image";
document.head.appendChild(jsDemoImagesTransform);
// This needs to be included before the '@wiris/mathtype-tinymce6' is loaded synchronously
window.$ = $;
window.tinymce = require("tinymce"); // Expose the TinyMCE to the window.
// Load wiris plugin synchronously.
require("@wiris/mathtype-tinymce6");

const Editor = () => {
    const editorRef: any = useRef(null);

    return (
        <>
            <TextEditor
                id="editor"
                apiKey="asaevq5vbq6crpxwfcd0aqhu68acp7hiauz8m58or35mu253"
                onInit={(evt, editor) => (editorRef.current = editor)}
                // initialValue="Ketik"
                init={{
                    height: 500,
                    menubar: false,
                    external_plugins: {
                        tiny_mce_wiris: `${window.location.href}/node_modules/@wiris/mathtype-tinymce6/plugin.min.js`,
                    },
                    toolbar:
                        "blocks fontfamily fontsize  | undo redo | formatselect | " +
                        "bold italic backcolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | " +
                        "tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",
                    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    htmlAllowedTags: [".*"],
                    htmlAllowedAttrs: [".*"],
                    extended_valid_elements: "*[.*]",
                }}
            />
        </>
    );
};

export default Editor;
