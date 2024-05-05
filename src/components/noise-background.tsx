import { BackgroundImage, BackgroundImageProps } from "@mantine/core";

import noise from "@/assets/noise.svg";

interface NoiseBackgroundProps extends Omit<BackgroundImageProps, "src"> {}

export const NoiseBackground = (props: NoiseBackgroundProps) => {
  return (
    <BackgroundImage
      src={noise.src}
      pos="absolute"
      w="100%"
      h="100%"
      {...props}
      style={{
        ...props?.style,
        backgroundRepeat: "repeat",
        backgroundSize: "initial",
      }}
    />
  );
};
