import Nav from "./Nav"
import Resources from "./Resources"

export default function Layout() {
    return (
        <>
            <body>
                <header>
                    <Nav />
                </header>
            
                <main>
                    <Resources />
                </main>
            </body>


        </>
    )
}