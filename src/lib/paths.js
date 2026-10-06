/**
 * A page or file on this site, with the folder the site is served from in front: "/components" stays
 * "/components" at the root of a domain, and becomes "/bettergovuiwebsite/components" on GitHub Pages.
 * Router links (`to`) don't need it; plain links (`href`) do.
 */
export function sitePath(path) {
    return import.meta.env.BASE_URL.replace(/\/$/, "") + path;
}
