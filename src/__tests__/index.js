import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

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

test("search form could be used", async () => {
  render(<App />);
  const input = await screen.findByRole("textbox");
  fireEvent.change(input, { target: { value: "Matrix" } });
  const button = await screen.findByRole("button");
  fireEvent.click(button);
  const title = await screen.findByText("Matrix");
  expect(title).toBeVisible();
});
