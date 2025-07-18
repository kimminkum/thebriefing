import React, { useEffect, useRef } from 'react';

interface ObserverTriggerProps {
  intersect: () => void;
  enabled: boolean;
}

export default function ObserverTrigger({ intersect, enabled }: ObserverTriggerProps) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observerRef.current || !enabled) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        intersect();
      }
    });

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [enabled, intersect]);

  return <div ref={observerRef}></div>;
}
