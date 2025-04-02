import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Import the worker from pdfjs-dist
import { GlobalWorkerOptions } from 'pdfjs-dist';

// Dynamically resolve the worker source
GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();

function ResumePage() {
  return (
    <div className="resume-page" style={{ height: '100vh' }}>
      <Worker workerUrl={GlobalWorkerOptions.workerSrc}>
        <Viewer fileUrl="/Anthony_Smith_Resume.pdf" />
      </Worker>
    </div>
  );
}

export default ResumePage;