import { PolymorphicComponentPropWithRef } from "../types/polymorphic";

type ButtonProps = {
  disabled?: boolean;
};

type ButtonPropsWithPolymorphic<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, ButtonProps>;

type ButtonComponent = <C extends React.ElementType = "button">(
  props: ButtonPropsWithPolymorphic<C>,
) => React.ReactElement | null;

export type { ButtonProps, ButtonPropsWithPolymorphic, ButtonComponent };
