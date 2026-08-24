import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackTitle?: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackTitle,
  className = '',
  ...props
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#3D0C13] ${className}`}>
      {!error ? (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          {...props}
        />
      ) : null}

      {/* Styled Temple Gradient Fallback (renders when error or loading slow) */}
      {(error || !loaded) && (
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-[#58181F] via-[#3D0C13] to-[#2C1810] border border-[#D4AF37]/20 ${loaded && !error ? 'hidden' : 'flex'}`}>
          <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 flex items-center justify-center mb-2 bg-[#FAF7F0]/10 text-[#D4AF37] text-xl">
            🛕
          </div>
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-1">
            SHRI RADHA VALLABH
          </span>
          <p className="text-sm font-serif text-[#FAF7F0] line-clamp-2 max-w-[80%]">
            {fallbackTitle || alt}
          </p>
          <div className="mt-2 w-10 h-0.5 bg-gradient-to-r from-transparent via-[#E65C00] to-transparent"></div>
        </div>
      )}
    </div>
  );
};
