import React from 'react';
import "../components/Style/index.css";

export default function LoadingFallback() {
  return (
    <div aria-live="polite" style={{ padding: 24 }}>
      <p>Loading...</p>
    </div>
  );
}