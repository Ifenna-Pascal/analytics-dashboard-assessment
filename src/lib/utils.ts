import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number as a decimal with optional compact notation.
 * @param value - The number to format.
 * @param isCompact - Whether to use compact notation.
 * @returns The formatted decimal string.
 */
export const formatNumber = (value: number, isCompact = false): string =>
  new Intl.NumberFormat('en-NG', {
    style: 'decimal',
    notation: isCompact ? 'compact' : 'standard',
    compactDisplay: isCompact ? 'short' : undefined,
  }).format(value);
