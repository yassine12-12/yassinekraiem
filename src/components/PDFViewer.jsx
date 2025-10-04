import { useState, useEffect } from 'react';

const PDFViewer = ({ pdfUrl, title, isOpen, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(52); // Will be updated based on PDF

  // Reset when opening
  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setCurrentPage(1);
      // Set total pages based on PDF
      if (pdfUrl.includes('project2.pdf')) {
        setTotalPages(52);
      } else if (pdfUrl.includes('thesis.pdf')) {
        setTotalPages(100);
      }
    }
  }, [isOpen, pdfUrl]);

  // Don't render if not open or no PDF URL
  if (!isOpen || !pdfUrl) return null;

  const handleLoad = () => {
    setLoading(false);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page) => {
    const pageNum = parseInt(page);
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-full max-h-[85vh] bg-gray-900/95 rounded-xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 text-white p-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-red-400 transition-colors duration-300 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* PDF Viewer with centered, smooth navigation */}
        <div className="w-full h-[calc(100%-80px)] relative bg-gray-800 flex items-center justify-center overflow-hidden">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50 z-10">
              <div className="text-white text-lg">Loading PDF...</div>
            </div>
          )}
          
          {/* Centered PDF viewer - blocks horizontal scroll for smooth keyboard navigation */}
          <iframe
            key={`pdf-page-${currentPage}`} // Force reload for each page
            src={`${pdfUrl}#page=${currentPage}&toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit&view=Fit`}
            className="w-full h-full border-0 bg-white"
            title={`${title} - Page ${currentPage}`}
            onLoad={handleLoad}
            onError={(e) => {
              console.log('PDF iframe error:', e);
              setLoading(false);
            }}
            style={{
              display: loading ? 'none' : 'block',
              overflow: 'hidden' // Block horizontal scrolling
            }}
            scrolling="no"
          />

          {/* Open in new tab button */}
          <div className="absolute top-4 right-4 z-20">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-sm shadow-lg"
            >
              Open in new tab
            </a>
          </div>
        </div>

        {/* Simple page number display */}
        <div className="bg-gray-800/90 text-white p-3 flex justify-center items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm">Page</span>
            <input
              type="number"
              value={currentPage}
              onChange={(e) => goToPage(e.target.value)}
              className="bg-gray-700 text-white px-2 py-1 rounded w-16 text-center text-sm"
              min="1"
              max={totalPages}
            />
            <span className="text-sm">of {totalPages}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;