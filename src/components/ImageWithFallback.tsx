import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
  fallbackText?: string;
  fallbackSubText?: string;
  icon?: React.ReactNode;
}

export default function ImageWithFallback({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackClassName = 'absolute inset-0 flex flex-col items-center justify-center p-4',
  fallbackText,
  fallbackSubText,
  icon,
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!error && (
        <img
          src={src}
          alt={alt}
          className={className}
          onError={() => setError(true)}
          loading="lazy"
        />
      )}
      {error && (
        <div className={fallbackClassName}>
          {icon && <div className="mb-2">{icon}</div>}
          {fallbackText && <p className="text-navy-500 text-sm text-center">{fallbackText}</p>}
          {fallbackSubText && <p className="text-navy-400 text-xs text-center mt-1">{fallbackSubText}</p>}
        </div>
      )}
    </div>
  );
}
