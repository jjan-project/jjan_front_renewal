import { InputHTMLAttributes, ReactNode } from "react";

type RenderProps = {
  files: FileList;
  handleClick: () => void;
};

type ImageUploaderProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "name"
> & {
  /**
   * name to register external library which is react-hook-form
   */
  name: string;
  /**
   * render function
   */
  render: (props: RenderProps) => ReactNode;
};

export type { RenderProps, ImageUploaderProps };
