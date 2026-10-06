import { Button, Link } from "bettergovregiondavaoui";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { findExample } from "../../lib/examples.js";
import { useSettings } from "../../lib/settings.js";

const SIZES = [
    { id: "phone", label: "Phone", width: 390, Icon: Smartphone },
    { id: "tablet", label: "Tablet", width: 768, Icon: Tablet },
    { id: "desktop", label: "Desktop", width: 1280, Icon: Monitor },
];

/**
 * A whole-page example on the home page (the Dashboard and Landing page tabs): a still picture of the page at a phone,
 * tablet or desktop width, scaled to fit, fading out into the footer. Nothing scrolls inside it, and it can't be
 * clicked or focused; "Open in a new tab" shows the real page to use.
 */
export function PagePreview({ slug, id, height }) {
    const example = findExample(slug, id);
    const { theme, language } = useSettings();
    // A desktop page shrunk onto a phone is too small to read, so phones start with the phone size
    const [size, setSize] = useState(() => (matchMedia("(width < 48em)").matches ? "phone" : "desktop"));
    const stage = useRef(null);
    const [stageWidth, setStageWidth] = useState(0);

    useEffect(() => {
        const observer = new ResizeObserver(([item]) => setStageWidth(item.contentRect.width));
        observer.observe(stage.current);
        return () => observer.disconnect();
    }, []);

    const { width } = SIZES.find((option) => option.id === size);
    const scale = stageWidth && width > stageWidth ? stageWidth / width : 1;
    const src = `${import.meta.env.BASE_URL}frame/${slug}/${id}?theme=${theme}&lang=${language}`;

    return (
        <div className="landing-page-preview">
            <div className="landing-page-preview-bar">
                <div className="landing-segmented" role="group" aria-label="Preview width">
                    {SIZES.map(({ id: sizeId, label, Icon }) => (
                        <Button
                            key={sizeId}
                            size="sm"
                            variant="text"
                            color="var(--text)"
                            leftIcon={<Icon />}
                            aria-pressed={size === sizeId}
                            onClick={() => setSize(sizeId)}
                        >
                            {label}
                        </Button>
                    ))}
                </div>
                <Link href={src} external>Open in a new tab</Link>
            </div>
            <div ref={stage} className="landing-page-preview-stage" style={{ height }} inert>
                {example && (
                    <iframe
                        title={`${example.title}, ${size} size`}
                        src={src}
                        loading="lazy"
                        scrolling="no"
                        style={{
                            width,
                            height: height / scale,
                            transform: scale < 1 ? `scale(${scale})` : undefined,
                        }}
                    />
                )}
            </div>
        </div>
    );
}
