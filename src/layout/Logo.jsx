/** The site's mark: three blocks, like a page built from parts. Same drawing as public/favicon.svg. */
export function Logo({ size = 28 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className="logo">
            <rect width="32" height="32" rx="7" fill="var(--primary)" />
            <rect x="7" y="7" width="18" height="5" rx="1.5" fill="#fff" />
            <rect x="7" y="14" width="8" height="11" rx="1.5" fill="#fff" />
            <rect x="17" y="14" width="8" height="11" rx="1.5" fill="#fff" fillOpacity=".6" />
        </svg>
    );
}
