import { PolymorphicComponentPropWithRef } from "../types/polymorphic";

type Appearance = "primary" | "secondary";

type ButtonProps = {
  appearance?: Appearance;
  disabled?: boolean;
};

type ButtonPropsWithPolymorphic<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, ButtonProps>;

type ButtonComponent = <C extends React.ElementType = "button">(
  props: ButtonPropsWithPolymorphic<C>,
) => React.ReactNode;

export type {
  ButtonComponent,
  ButtonPropsWithPolymorphic,
  Appearance,
  ButtonProps,
};
