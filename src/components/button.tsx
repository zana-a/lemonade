export enum Priority {
  Primary,
  Secondary,
  Tertiary,
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  priority?: Priority;
}

export function Button(props: ButtonProps): React.JSX.Element {
  const { className, ...restProps } = props;
  return <button className={`${className}`} {...restProps} />;
}

function Primary(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
): React.JSX.Element {
  const { className, ...restProps } = props;
  return <Button className={className} {...restProps} />;
}

function Secondary(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
): React.JSX.Element {
  const { className, ...restProps } = props;
  return <Button className={`${className} bg-orange-500`} {...restProps} />;
}

// example
function A() {
  return (
    <>
      <Button priority={Priority.Primary}>Hello, world</Button>
    </>
  );
}

Button.Primary = Primary;
Button.Secondary = Secondary;
