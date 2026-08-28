// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PortalState title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PortalState/i);
    expect(titleElement).toBeInTheDocument();
});
