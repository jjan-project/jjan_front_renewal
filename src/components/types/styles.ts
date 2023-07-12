/* eslint-disable @typescript-eslint/ban-types */

type SelfPosition =
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "self-end"
  | "self-start"
  | "start";

type ContentPosition = "center" | "end" | "flex-end" | "flex-start" | "start";

type ContentDistribution =
  | "space-around"
  | "space-between"
  | "space-evenly"
  | "stretch";

type CSSPropertyGlobals =
  | "-moz-initial"
  | "inherit"
  | "initial"
  | "revert"
  | "unset";

type CSSPropertyAlignItems =
  | CSSPropertyGlobals
  | SelfPosition
  | "baseline"
  | "normal"
  | "stretch"
  | (string & {});

type CSSPropertyAlignContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "start"
  | "baseline"
  | "normal"
  | (string & {});

type CSSPropertyJustifyItems =
  | CSSPropertyGlobals
  | SelfPosition
  | "baseline"
  | "left"
  | "legacy"
  | "normal"
  | "right"
  | "stretch"
  | (string & {});

type CSSPropertyJustifyContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | ContentPosition
  | "left"
  | "normal"
  | "right"
  | (string & {});

type CSSPropertyFlexWrap =
  | CSSPropertyGlobals
  | "nowrap"
  | "wrap"
  | "wrap-reverse";

type CSSPropertyFlexDirection =
  | CSSPropertyGlobals
  | "column"
  | "column-reverse"
  | "row"
  | "row-reverse";

type CSSPropertyJustifySelf =
  | CSSPropertyGlobals
  | SelfPosition
  | "auto"
  | "baseline"
  | "left"
  | "normal"
  | "right"
  | "stretch"
  | (string & {});

type CSSPropertyAlignSelf =
  | CSSPropertyGlobals
  | SelfPosition
  | "auto"
  | "baseline"
  | "normal"
  | "stretch"
  | (string & {});

/**
 * Grid
 */
type GridLine = "auto" | (string & {});

type CSSPropertyGridColumn = CSSPropertyGlobals | GridLine | (string & {});

type CSSPropertyGridRow = CSSPropertyGlobals | GridLine | (string & {});

type CSSPropertyGridAutoFlow =
  | CSSPropertyGlobals
  | "column"
  | "dense"
  | "row"
  | (string & {});

type CSSPropertyGridArea = CSSPropertyGlobals | GridLine | (string & {});

export type {
  SelfPosition,
  ContentPosition,
  ContentDistribution,
  CSSPropertyGlobals,
  CSSPropertyAlignItems,
  CSSPropertyAlignContent,
  CSSPropertyJustifyItems,
  CSSPropertyJustifyContent,
  CSSPropertyFlexWrap,
  CSSPropertyFlexDirection,
  CSSPropertyJustifySelf,
  CSSPropertyAlignSelf,
  GridLine,
  CSSPropertyGridColumn,
  CSSPropertyGridRow,
  CSSPropertyGridAutoFlow,
  CSSPropertyGridArea,
};
