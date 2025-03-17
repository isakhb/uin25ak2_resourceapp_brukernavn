import PageTitle from "./PageTitle"

export default function Resources({ selectedCategory, resources = [] }) {
  console.log("Current Category:", selectedCategory)
  console.log("Resources Array:", resources)

  // Normaliserer kategorinavna slik at de matcher med knappene
  const normalize = (str) => str.trim().toLowerCase().replace(/\s+/g, "-")

  // Filter ressurser basert på kategori
  const filteredResources = resources.filter(res => 
    normalize(res.category) === normalize(selectedCategory)
  )

  console.log("Filtered Resources:", filteredResources)

  return (
    <section>
      {filteredResources.length > 0 ? (
        <>
          <PageTitle text={selectedCategory} />
          <ul>
            {filteredResources.map(res => (
              <li key={res.title}>
                <a href={res.url}>{res.title}</a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        //Printer ut dette hvis ingen ressurser ble funnet
        <p>Ingen ressurser funnet for {selectedCategory}</p>
      )}
    </section>
  )
}
