import styles from './IconWrapper.module.css';

interface Props {
  name: string;
  size?: number;
  color?: string;
  ariaHidden?: boolean;
  className?: string;
}

export function IconWrapper({
  name,
  size,
  color,
  ariaHidden = true,
  className,
}: Props) {
  const style: React.CSSProperties = {};
  if (size !== undefined) style.fontSize = `${size}px`;
  if (color !== undefined) style.color = color;

  return (
    <span
      className={[styles.icon, 'material-icons', className]
        .filter(Boolean)
        .join(' ')}
      style={style}
      aria-hidden={ariaHidden}
    >
      {name}
    </span>
  );
}
