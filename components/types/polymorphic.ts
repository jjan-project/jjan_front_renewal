type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = object,
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = object,
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

export type {
  PolymorphicComponentPropWithRef,
  PolymorphicComponentProp,
  PolymorphicRef,
};
