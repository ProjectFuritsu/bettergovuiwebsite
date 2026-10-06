/**
 * Copies text. The clipboard API only works on https and localhost, so on plain http (e.g. opening the site from a
 * phone on your network) it falls back to the older copy command. Throws when neither works.
 */
export async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.append(textarea);
        textarea.select();
        const copied = document.execCommand("copy");
        textarea.remove();
        if (!copied) throw new Error("Copy failed");
    }
}
