interface HeroProps {
    children: React.ReactNode
}

interface HeroElementProps {
    children: React.ReactNode
}

export function HeroTitle({children} : HeroElementProps){
    return <h1 className="text-5xl my-6">{children}</h1>
}

export function HeroSubtitle({children} : HeroElementProps){
    return <p className="text-lg mb-12">{children}</p>
}

export default function Hero({children} : HeroProps) {
  return (
    <div className="text-center">
        {children}
    </div>
  )
}