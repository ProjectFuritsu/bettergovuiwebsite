import { Button, Group, Link } from "bettergovregiondavaoui";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSettings } from "../lib/settings.js";

const WIDTHS = [
    { id: "phone", label: "Phone", width: 375, Icon: Smartphone },
    { id: "tablet", label: "Tablet", width: 768, Icon: Tablet },
    { id: "desktop", label: "Desktop", width: 1280, Icon: Monitor },
];

/**
 * Whole pages (Scaffold, LandingPage) react to the size of the screen, not of the box around them, so they're
 * shown in a frame at a real phone, tablet or desktop width, scaled down to fit the column when needed.
 */
export function FramePreview({ example }) {
    const { theme, language } = useSettings();
    const [size, setSize] = useState("desktop");
    const stage = useRef(null);
    const [stageWidth, setStageWidth] = useState(0);

    useEffect(() => {
        const observer = new ResizeObserver(([item]) => setStageWidth(item.contentRect.width));
        observer.observe(stage.current);
        return () => observer.disconnect();
    }, []);

    const { width } = WIDTHS.find((option) => option.id === size);
    const scale = stageWidth && width > stageWidth ? stageWidth / width : 1;
    const height = example.frameHeight;
    const src = `${import.meta.env.BASE_URL}frame/${example.slug}/${example.id}?theme=${theme}&lang=${language}`;

    return (
        <div className="frame-preview">
            <Group justify="space-between" gap="sm" className="frame-toolbar">
                <Group gap="xs" role="group" aria-label="Preview width">
                    {WIDTHS.map(({ id, label, Icon }) => (
                        <Button
                            key={id}
                            size="sm"
                            variant={size === id ? "filled" : "text"}
                            color={size === id ? "primary" : "secondary"}
                            leftIcon={<Icon />}
                            aria-pressed={size === id}
                            onClick={() => setSize(id)}
                        >
                            {label}
                        </Button>
                    ))}
                </Group>
                <Link href={src} external className="frame-open">Open in a new tab</Link>
            </Group>
            <div ref={stage} className="frame-stage" style={{ height }}>
                <iframe
                    title={`${example.title}, ${size} preview`}
                    src={src}
                    loading="lazy"
                    style={{
                        width,
                        height: height / scale,
                        transform: scale < 1 ? `scale(${scale})` : undefined,
                    }}
                />
            </div>
        </div>
    );
}
