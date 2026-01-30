import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { GlobalWorkerOptions } from 'pdfjs-dist';
import TopNav from '../components/TopNav';

GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();

function ResumePage() {
    return (
        <div className="resume-page">
            <TopNav />
            <div className="pdf-container">
                <div className="pdf-wrapper">
                    <Worker workerUrl={GlobalWorkerOptions.workerSrc}>
                        <Viewer fileUrl="/Anthony Smith - BASE Software Engineer Resume.pdf" />
                    </Worker>
                </div>
            </div>
        </div>
    );
}

export default ResumePage;
