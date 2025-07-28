// Simple utility to generate consistent pastel colors based on string ID and theme
export function getPastelForId(id: string, isDarkMode: boolean = true): string {
  // Simple hash function to convert string to number
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    const char = id.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  // Use hash to generate pastel colors based on theme
  const hue = Math.abs(hash) % 360;
  const saturation = 40 + (Math.abs(hash) % 30); // 40-70%

  if (isDarkMode) {
    // Dark mode: soft dark pastel colors
    const lightness = 20 + (Math.abs(hash) % 25); // 20-45% (dark range)
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  } else {
    // Light mode: soft light pastel colors
    const lightness = 75 + (Math.abs(hash) % 20); // 75-95% (light range)
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
}
