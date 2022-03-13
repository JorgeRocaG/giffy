import { act, renderHook } from "@testing-library/react-hooks";
import useForm from "./hooks";

const setup = (params) => renderHook(() => useForm(params));

test("should change keyword", () => {
  const { result } = renderHook(() => useForm());

  act(() => {
    result.current.updateKeyword("batman");
  });

  expect(result.current.keyword).toBe("batman");
});

test("should use initial keyword", () => {
  const { result } = setup({ initialKeyword: "matrix" });

  expect(result.current.keyword).toBe("matrix");
});

test("shoul update correctly times when used twice", () => {
  const { result } = setup({ initialKeyword: "matrix" });

  act(() => {
    result.current.updateKeyword("b");
    result.current.updateKeyword("ba");
  });

  expect(result.current.keyword).toBe("ba");
  expect(result.current.times).toBe(2);
});
