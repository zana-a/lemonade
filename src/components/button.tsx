export function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
): React.JSX.Element {
  const { className, ...restProps } = props;
  return <button className={`${className} bg-orange-500`} {...restProps} />;
}
