// src/App.test.jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });

  it('renders count button', () => {
    render(<App />);
    expect(screen.getByText(/count is/i)).toBeInTheDocument();
  });
});
