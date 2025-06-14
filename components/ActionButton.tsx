// components/ActionButton.tsx
"use client";

import React from 'react';
import Link from 'next/link';

interface ActionButtonProps {
  href: string;
  text: string;
  primary?: boolean;
}

export default function ActionButton({ href, text, primary = true }: ActionButtonProps) {
  return (
    <Link href={href}>
      <div style={{
        display: 'inline-block',
        padding: primary ? '0.75rem 1.5rem' : '0.75rem 1.5rem',
        backgroundColor: primary ? '#4CAF50' : 'transparent',
        color: primary ? 'white' : '#4CAF50',
        border: primary ? 'none' : '2px solid #4CAF50',
        borderRadius: '4px',
        fontSize: '1rem',
        fontWeight: '600',
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: primary ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
        margin: '1rem 0'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = primary ? '#45a049' : 'rgba(76, 175, 80, 0.1)';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = primary ? '0 6px 8px rgba(0, 0, 0, 0.15)' : '0 2px 4px rgba(0, 0, 0, 0.05)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = primary ? '#4CAF50' : 'transparent';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = primary ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none';
      }}
      >
        {text}
      </div>
    </Link>
  );
}

