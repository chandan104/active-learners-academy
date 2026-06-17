import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '3rem',
        height: '3rem',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #f59e0b, #d97706)',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 20px rgba(245,158,11,0.5)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.9)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px) scale(1.1)';
        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 28px rgba(245,158,11,0.65)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.transform = visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.9)';
        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(245,158,11,0.5)';
      }}
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
}
