import { render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test("renders without crashing", async () => {
  const { findByText } = render(<App />);
  const title = await screen.findByText(/Última búsqueda/i);
  expect(title).toBeInTheDocument();
});
