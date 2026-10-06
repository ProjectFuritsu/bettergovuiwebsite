// Contrast between two colors, the WCAG way. For the theme playground's "is white text readable on it?" check.

function channels(hex) {
    const value = hex.replace("#", "");
    const full = value.length === 3 ? [...value].map((digit) => digit + digit).join("") : value;
    return [0, 2, 4].map((start) => parseInt(full.slice(start, start + 2), 16) / 255);
}

function luminance(hex) {
    const [r, g, b] = channels(hex).map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** The contrast ratio, from 1 (none) to 21 (black on white). Normal text needs 4.5 (WCAG AA). */
export function contrastRatio(a, b) {
    const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
    return (light + 0.05) / (dark + 0.05);
}
