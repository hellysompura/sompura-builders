import { icons, type LucideProps } from "lucide-react";
import { type ComponentType } from "react";

type IconName = keyof typeof icons;

export default function Icon({
  name = "CircleHelp" as IconName,
  size = 24,
  className = "",
  color = "white",
  onClick = () => {},
}: {
  name?: IconName;
  size?: number;
  className?: string;
  color?: string;
  onClick?: () => void;
}) {
  const LucideIcon = icons[name] as ComponentType<LucideProps>;

  if (!LucideIcon) return null;

  return (
    <LucideIcon
      color={color}
      size={size}
      className={className}
      onClick={onClick}
    />
  );
}
