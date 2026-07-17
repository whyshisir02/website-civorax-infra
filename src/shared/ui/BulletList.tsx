import { CheckCircle2 } from "lucide-react";

type BulletListProps = {
  items: string[];
  iconClassName?: string;
  textClassName?: string;
};

export default function BulletList({
  items,
  iconClassName = "text-[#006c4e]",
  textClassName = "text-[#1c1c19]",
}: BulletListProps) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle2
            size={20}
            className={`mt-1 shrink-0 ${iconClassName}`}
            strokeWidth={2.2}
          />
          <span className={`text-base leading-7 ${textClassName}`}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
