import Container from "../components/container";
import Hero, { HeroSubtitle, HeroTitle } from "../components/hero";

export default function Home() {
  return (
    <div>
      <header>
        <Container>
          <Hero>
            <HeroTitle>Linear is a better way <br /> to build products</HeroTitle>
            <HeroSubtitle>Meet the new standard for modern software development. <br />
              Streamline issues, sprints, and product roadmaps.</HeroSubtitle>
          </Hero>
          <img src="/img/hero.webp" alt="Hero Image" />
        </Container>
      </header>
      <main>
        main content
      </main>
      <footer>
        footer
      </footer>
    </div>
  )
}