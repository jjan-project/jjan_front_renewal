import { InputHTMLAttributes, ReactNode } from "react";

import { BaseTest } from "../../types/base";

type RenderProps = {
  files: File[];
  handleClick: () => void;
  handleDeleteByIndex: (target: number) => void;
  handleDeleteAll: () => void;
};

type ImageUploaderProps = Omit<InputHTMLAttributes<HTMLInputElement>, "name"> &
  BaseTest & {
    /**
     * name to register external library which is react-hook-form
     */
    name: string;
    /**
     * render function
     */
    render: (props: RenderProps) => ReactNode;
    mode?: "single" | "multiple";
    accepts?: string;
  };

export type { RenderProps, ImageUploaderProps };
