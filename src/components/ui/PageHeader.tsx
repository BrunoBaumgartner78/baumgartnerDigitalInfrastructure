import { cn } from "@/lib/cn";

export function PageHeader({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <header className={cn("mb-10 md:mb-12", className)}>
      <h1 className="headline-lg">{title}</h1>
      {description ? (
        <p className="text-body mt-3 max-w-2xl">{description}</p>
      ) : null}
    </header>
  );
}
