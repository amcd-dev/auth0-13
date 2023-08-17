import NavBar from "./navigation/NavBar";

export default function Layout({ children }) {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    )
}