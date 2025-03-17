export default function Nav({ setSelectedCategory, categories }) {
  return (
    <nav>
      {categories.map(category => (
        <button 
          key={category} 
          onClick={() => {
            // Debugging
            console.log("Knapp trykket på:", category)
            setSelectedCategory(category)
          }}
        >
          {category}
        </button>
      ))}
    </nav>
  )
}
