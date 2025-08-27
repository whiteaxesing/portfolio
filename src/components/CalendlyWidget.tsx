'use client';
import { useEffect } from 'react';

interface CalendlyWidgetProps {
  url: string;
  height?: string;
  minWidth?: string;
}

export default function CalendlyWidget({
  url,
  height = '700px',
  minWidth = '320px',
}: CalendlyWidgetProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="calendly-inline-widget" data-url={url} style={{ minWidth, height }} />;
}
