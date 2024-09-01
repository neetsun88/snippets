'use client';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

export default function docViewer(){
    
    const docs = [
        { uri: "https://filesampleshub.com/download/document/docx/sample1.docx" }, // Remote file
        // { uri: require("./example-files/pdf.pdf") }, // Local File
      ];

    return <DocViewer style={{height:100}} documents={docs} pluginRenderers={DocViewerRenderers} />
}