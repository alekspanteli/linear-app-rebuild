import Container from "../components/container";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div>
      <header>
        <Container>
          <Hero title="Linear is a better way to build products" subtitle="Meet the new standard for modern software development.
Streamline issues, sprints, and product roadmaps." />
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