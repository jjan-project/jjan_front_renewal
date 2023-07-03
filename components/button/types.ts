import { PolymorphicComponentPropWithRef } from "../types/polymorphic";

type Appearance = "primary";

type ButtonProps = {
  disabled?: boolean;
  appearance?: Appearance;
};

type ButtonPropsWithPolymorphic<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, ButtonProps>;

type ButtonComponent = <C extends React.ElementType = "button">(
  props: ButtonPropsWithPolymorphic<C>,
) => React.ReactElement | null;

export type {
  ButtonProps,
  ButtonPropsWithPolymorphic,
  ButtonComponent,
  Appearance,
};
