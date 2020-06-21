import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'

const ExamplePDFViewer = () => {
    return (
        <PDFViewer
            document={{
                url: 'assets/NMR.pdf',
            }}
        />
    )
}

export default ExamplePDFViewer