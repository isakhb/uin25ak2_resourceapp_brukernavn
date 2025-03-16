export default function Resources.jsx() {
    return (
        <script>
            document.addEventListener("DOMContentLoaded", () => {
                const resourceContainer = document.getElementById("IDresources");
                const buttons = document.querySelectorAll("button");

                function printResources(category) {
                    const filteredResources = resources.filter(res => res.category === category);
                    resourceContainer.innerHTML = filteredResources.map(res =>
                        `<h1>${res.category}</h1>
                        <p>${res.text}</p>
                        <ul>
                            ${res.sources.map(src =>
                                `<li><a href="${src.url}">${src.title}</a></li>`
                            ).join('')}
                        </ul>`
                    ).join('');
                }

                buttons.forEach(button => {
                    button.addEventListener("click", () => {
                        printResources(button.innerText);
                    });
                });

                printResources("HTML");
            });
        </script>
    )
}