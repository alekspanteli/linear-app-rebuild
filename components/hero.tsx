interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
}

export function HeroTitle({ children }: HeroElementProps) {
  return <h1 className="my-6 text-5xl">{children}</h1>;
}

export function HeroSubtitle({ children }: HeroElementProps) {
  return <p className="mb-12 text-lg">{children}</p>;
}

export default function Hero({ children }: HeroProps) {
  return <div className="text-center">{children}</div>;
}
