import { ReactNode } from "react";

import type {
  CSSPropertyAlignContent,
  CSSPropertyAlignItems,
  CSSPropertyAlignSelf,
  CSSPropertyFlexDirection,
  CSSPropertyFlexWrap,
  CSSPropertyJustifyContent,
  CSSPropertyJustifyItems,
  CSSPropertyJustifySelf,
} from "@/components/types";

type FlexProps = {
  /**
   * Aligns flex items along the cross axis of the current line of the flex container.
   */
  alignItems?: CSSPropertyAlignItems;

  /**
   * Aligns a flex container's lines within the flex container when there is extra space in the cross-axis.
   */
  alignContent?: CSSPropertyAlignContent;

  /**
   * Aligns flex items along the main axis of the current line of the flex container.
   */
  justifyContent?: CSSPropertyJustifyContent;

  /**
   * Defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
   */
  justifyItems?: CSSPropertyJustifyItems;

  /**
   * Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.
   */
  flexWrap?: CSSPropertyFlexWrap;

  /**
   * Represents the initial main size of the flex item. It sets the size of the content box unless otherwise set with box-sizing.
   */
  flexBasis?: string;

  /**
   * Sets the direction of the main axis which defines the direction flex items are placed in the flex container.
   */
  flexDirection?: CSSPropertyFlexDirection;

  /**
   * Sets the flex grow factor of a flex item's main size.
   */
  flexGrow?: string;

  /**
   * Sets the flex shrink factor of a flex item's main size.
   */
  flexShrink?: string;

  /**
   * Allows the default alignment (or the one specified by justify-items) to be overridden for individual flex items.
   */
  justifySelf?: CSSPropertyJustifySelf;

  /**
   * Allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.
   */
  alignSelf?: CSSPropertyAlignSelf;

  /**
   * Controls the order in which flex items appear within the flex container.
   */
  order?: string;

  /**
   * Defines the space between flex items.
   */
  gap?: string;

  /**
   * The items to lay out in the flex container.
   */
  children?: ReactNode;
};

export type { FlexProps };
