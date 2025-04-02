import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Import the worker from pdfjs-dist
import { GlobalWorkerOptions } from 'pdfjs-dist';
import TopNav from '../components/TopNav';
import { Container } from 'react-bootstrap';

// Dynamically resolve the worker source
GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();

function ResumePage() {
    return (
        <div className="resume-page" style={{ height: '100%' }}>
            <TopNav />
            <Container className="pdf-container d-flex justify-content-center align-items-center">
                <div className="pdf-wrapper">
                    <Worker workerUrl={GlobalWorkerOptions.workerSrc}>
                        <Viewer fileUrl="/Anthony_Smith_Resume.pdf" />
                    </Worker>
                </div>
            </Container>
        </div>
    );
}

export default ResumePage;