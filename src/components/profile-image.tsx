import { Box, BoxProps, MantineBreakpoint } from "@mantine/core";
import Image from "next/image";

import { useSizeFromRatio } from "@/hooks/use-size-from-ratio";
import filip from "@/assets/filip.png";
import { useSizes } from "@/hooks/use-sizes";

interface ProfileImageProps extends Omit<BoxProps, "w" | "h" | "pos"> {
  w?: Partial<Record<MantineBreakpoint, number>>;
  grayscale?: boolean;
}

export const ProfileImage = ({
  w = { base: 120 },
  grayscale = true,
  ...props
}: ProfileImageProps) => {
  const h = useSizeFromRatio(w, 910 / 576);
  const sizes = useSizes(w);

  return (
    <Box {...props} w={w} h={h} pos="relative">
      <Image
        src={filip.src}
        alt="profile image of me"
        fill
        sizes={sizes}
        style={{
          ...(grayscale ? { filter: "grayscale(1)" } : {}),
          objectFit: "cover",
        }}
      />
    </Box>
  );
};
