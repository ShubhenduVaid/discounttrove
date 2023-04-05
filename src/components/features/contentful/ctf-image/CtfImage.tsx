import Image, { ImageProps as NextImageProps } from "next/image";

import { ImageFieldsFragment } from "@src/lib/__generated/sdk";

interface ImageProps extends ImageFieldsFragment {
  imageProps?: Omit<NextImageProps, "src" | "alt">;
  quality?: number;
  loading?: "eager" | "lazy";
}

export const CtfImage = ({
  url,
  width,
  height,
  title,
  imageProps,
  quality,
  loading,
}: ImageProps) => {
  if (!url || !width || !height) return null;

  const blurURL = new URL(url);
  blurURL.searchParams.set("w", "10");

  return (
    <Image
      loading={loading || "lazy"}
      src={url}
      width={width}
      height={height}
      title={title || ""}
      alt={title || ""}
      sizes="(max-width: 1200px) 100vw, 50vw"
      quality={quality || 100}
      placeholder="blur"
      blurDataURL={blurURL.toString()}
      {...imageProps}
    />
  );
};
