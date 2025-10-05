import Image from "next/image";
import type { ImgHTMLAttributes } from "react";

type MDXImageProps = ImgHTMLAttributes<HTMLImageElement>;

export function MDXImage({ src, alt, className }: MDXImageProps) {
  if (!src || typeof src !== "string") return null;

  // Handle external URLs (http/https)
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return (
      <Image
        src={src}
        alt={alt || ""}
        width={800}
        height={400}
        className={className || "my-8 w-full h-auto"}
      />
    );
  }
  // Normalize the path to always start with /
  let imagePath = src;

  // Handle relative paths (e.g., "images/horse.jpg")
  if (!imagePath.startsWith("/")) {
    imagePath = `/${imagePath}`;
  }

  // Convert content/images paths to /content/images for Next.js
  if (imagePath.startsWith("/images/")) {
    imagePath = `/content${imagePath}`;
  }

  return (
    <Image
      src={imagePath}
      alt={alt || ""}
      width={800}
      height={400}
      className={className || "my-8 w-full h-auto"}
    />
  );
}
