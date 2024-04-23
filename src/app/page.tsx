import Image from "next/image";
import { Button, Navbar } from "flowbite-react";
import { NavBar } from "../components/Navbar";
import Jumbotrone from "@/components/(Home)/Jumbotrone";

export default function Home() {
    return (
        <div>
            <Jumbotrone />
            <Button>Click Me!</Button>
        </div>
    );
}
