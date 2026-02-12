import React, { useState } from 'react';

export const QRGenerator: React.FC = () => {
  const [url, setUrl] = useState('');
  const [qrUrl, setQrUrl] = useState('');

  const generateQR = () => {
    if (url) {
      // Utilise l'API QR Server pour générer le QR code
      const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url)}&color=2d1b1b&bgcolor=fdf9f9`;
      setQrUrl(qrApiUrl);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white p-4 rounded-lg shadow-lg border border-romantic-accent/30">
      <h3 className="text-sm font-bold mb-2 text-romantic-text">Générer QR Code</h3>
      <div className="flex flex-col gap-2">
        <input
          type="url"
          placeholder="URL de votre timeline"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="text-xs p-2 border rounded w-48"
        />
        <button
          onClick={generateQR}
          className="bg-romantic-accent text-white px-3 py-1 rounded text-xs hover:opacity-80"
        >
          Générer QR
        </button>
        {qrUrl && (
          <div className="mt-2">
            <img src={qrUrl} alt="QR Code" className="w-32 h-32 mx-auto" />
            <a
              href={qrUrl}
              download="timeline-qr-code.png"
              className="text-xs text-romantic-accent underline block text-center mt-1"
            >
              Télécharger
            </a>
          </div>
        )}
      </div>
    </div>
  );
};