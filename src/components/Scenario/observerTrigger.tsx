import React, { useEffect, useRef } from 'react';

interface ObserverTriggerProps {
  onIntersect: () => void;
  enabled: boolean;
}

export default function ObserverTrigger({ onIntersect, enabled }: ObserverTriggerProps) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observerRef.current || !enabled) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onIntersect();
      }
    });

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [onIntersect, enabled]);

  return <div ref={observerRef}></div>;
}
