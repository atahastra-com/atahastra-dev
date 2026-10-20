import { useEffect } from "react";
import { SITE_URL, PAGE_SEO } from "../data/seo";

const DEFAULTS = PAGE_SEO.home;

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Keeps <head> metadata in sync during client-side navigation.
 * Initial HTML for every route is prerendered at build time with the same values.
 */
export default function useSeo({ title, description, path = "/", noindex = false } = {}) {
  useEffect(() => {
    const resolvedTitle = title || DEFAULTS.title;
    const resolvedDescription = description || DEFAULTS.description;
    const url = `${SITE_URL}${path === "/" ? "/" : path}`;

    document.title = resolvedTitle;

    setMeta("name", "description", resolvedDescription);
    setMeta(
      "name",
      "robots",
      noindex
        ? "noindex, follow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );
    setMeta("property", "og:title", resolvedTitle);
    setMeta("property", "og:description", resolvedDescription);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", resolvedTitle);
    setMeta("name", "twitter:description", resolvedDescription);
    setCanonical(url);
  }, [title, description, path, noindex]);
}
