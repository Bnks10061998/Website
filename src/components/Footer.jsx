import React from 'react';

export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', marginTop: '2rem' }}>
      <p>© {new Date().getFullYear()} Sudhan — VFX & Animation Designer</p>
    </footer>
  );
}
