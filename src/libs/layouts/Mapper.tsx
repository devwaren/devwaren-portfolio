import { Fragment } from "react";

type AllowedTags = "ul" | "ol" | "select" | "div" | "nav" | "aside";

type Props<T> = {
  listFor: string;
  items: readonly T[];
  className?: string;
  children: (item: T, index: number) => React.ReactNode;
  as?: AllowedTags;
};

const MapperInner = <T,>({
  listFor,
  items,
  className,
  children,
  as = "ul",
}: Props<T>) => {
  const Component = as;

  return (
    <Component className={className} aria-labelledby={listFor}>
      {items.map((item, index) => (
        <Fragment key={`${listFor}-${index}`}>{children(item, index)}</Fragment>
      ))}
    </Component>
  );
};

export function Mapper<T>(props: Props<T>) {
  return <MapperInner {...props} />;
}
