import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => cleanup())

describe('<App />', () => {
    it("should render App component", () => {
      render(<App />)
      expect(true).toBeTruthy()
    });

    it("should initialize state variables to null or false when called", () => {
      render(<App />);
      const ipElement = screen.getByPlaceholderText("Introduce here the IP");
      expect(ipElement.value).toBe("");
    });

    it('should display the Header, Form, and Info components when rendered', () => {
      render(<App />);
      expect(screen.getByText('IP Information Browser')).toBeInTheDocument();
      expect(screen.getByText('User IP:')).toBeInTheDocument();
      expect(screen.getByText('Search IP information')).toBeInTheDocument();
    });
})