import { describe, it, expect} from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

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
})