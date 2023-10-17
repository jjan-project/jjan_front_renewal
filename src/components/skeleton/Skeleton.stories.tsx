import { Meta } from "@storybook/react";

import { Skeleton } from "./Skeleton";

export default {
  title: "Skeleton",
  component: Skeleton,
} as Meta;

export const Default = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Skeleton width={100} height={100} />
      <Skeleton width={100} height={100} radius="10px" />
      <Skeleton width={100} height={100} radius="50%" />
    </div>
  );
};
