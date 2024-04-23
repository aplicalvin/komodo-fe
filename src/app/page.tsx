import Image from "next/image";
import { Button, Navbar } from "flowbite-react";
import { NavBar } from "../components/Navbar";

export default function Home() {
    return (
        <div>
            <NavBar />
            <h1 className="font-bold">Halo bang</h1>
            <Button>Click Me!</Button>
        </div>
    );
}
