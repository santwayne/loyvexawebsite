import React, { useEffect, useRef, useState } from 'react';

// Browsers only allow autoplay when muted. The video starts muted and the
// button (or the native controls) turns sound on with a user tap.
export default function SoundVideo({ src, poster, className = '' }) {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
    const sync = () => setMuted(v.muted);
    v.addEventListener('volumechange', sync);
    return () => v.removeEventListener('volumechange', sync);
  }, []);

  const toggle = () => {
    const v = ref.current;
    v.muted = !v.muted;
    if (!v.muted) v.volume = 1;
    v.play().catch(() => {});
  };

  return (
    <div className={`sound-video ${className}`}>
      <video ref={ref} src={src} poster={poster} autoPlay muted loop playsInline controls preload="auto" />
      <button type="button" className="sound-btn" onClick={toggle} aria-label={muted ? 'Turn sound on' : 'Mute'}>
        {muted ? '🔇 Tap for sound' : '🔊 Sound on'}
      </button>
    </div>
  );
}

export function BgVideo({ src, poster, className }) {
  const ref = useRef(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);
  return <video ref={ref} className={className} src={src} poster={poster} autoPlay muted loop playsInline aria-hidden="true" />;
}
