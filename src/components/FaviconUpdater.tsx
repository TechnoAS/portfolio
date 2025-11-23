"use client";

import { useEffect } from "react";

export default function FaviconUpdater() {
  useEffect(() => {
    const updateFavicon = () => {
      // Use system/desktop theme preference for favicon, not webpage theme
      // This way: desktop light mode = light favicon, desktop dark mode = dark favicon
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const isMobile = window.matchMedia("(max-width: 640px)").matches;
      
      // Mobile always uses dark favicon, desktop uses system preference
      const isDark = isMobile || prefersDark;

      const lightIcon = "/iconLightMode.ico";
      const darkIcon = "/iconDark.ico";

      // Remove all existing favicon links (including those from Next.js metadata)
      const existingFavicons = document.querySelectorAll(
        "link[rel='icon'], link[rel='shortcut icon'], link[rel='apple-touch-icon']"
      );
      existingFavicons.forEach((link) => {
        const rel = link.getAttribute("rel");
        if (rel === "icon" || rel === "shortcut icon") {
          link.remove();
        }
      });

      // Create new favicon link with proper attributes
      const favicon = document.createElement("link");
      favicon.rel = "icon";
      favicon.type = "image/x-icon";
      favicon.href = isDark ? darkIcon : lightIcon;
      
      // Also add shortcut icon for better browser compatibility
      const shortcutIcon = document.createElement("link");
      shortcutIcon.rel = "shortcut icon";
      shortcutIcon.type = "image/x-icon";
      shortcutIcon.href = isDark ? darkIcon : lightIcon;
      
      document.head.appendChild(favicon);
      document.head.appendChild(shortcutIcon);
    };

    // Initial update - run immediately and also after a short delay
    updateFavicon();
    const timeoutId = setTimeout(updateFavicon, 100);

    // System theme change
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = () => {
      updateFavicon();
    };
    mq.addEventListener("change", handleMediaChange);

    // Also listen for resize to handle mobile/desktop switching
    const handleResize = () => {
      updateFavicon();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      mq.removeEventListener("change", handleMediaChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
}

