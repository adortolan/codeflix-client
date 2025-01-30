import { useScroll } from '@/app/hooks/useScroll';
import { renderHook, act } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';

describe('useScroll', () => {
  it('should be defined', () => {
    const { result } = renderHook(() => useScroll());
    expect(result.current).toBeDefined();
  });

  it('should be scrolled', () => {
    const { result } = renderHook(() => useScroll());
    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current).toBe(true);

    act(() => {
      window.scrollY = 0;
      window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current).toBe(false);
  });
});
