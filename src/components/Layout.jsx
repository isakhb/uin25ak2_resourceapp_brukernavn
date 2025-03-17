import Nav from "./Nav"
import Resources from "./Resources"

export default function Layout({ setSelectedCategory, categories, selectedCategory, resources }) {
  return (
    <div>
      <header>
        <Nav setSelectedCategory={setSelectedCategory} categories={categories} />
      </header>
      <main>
        <Resources selectedCategory={selectedCategory} resources={resources} />
      </main>
    </div>
  )
}
