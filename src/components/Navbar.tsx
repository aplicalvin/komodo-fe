"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Favicon from "@/assets/favicon.png";

function NavAccount() {
    const [connected, setConnected] = useState(false);
    const [active, setVoterStatus] = useState(false);

    const handleToggleConnection = () => {
        setConnected(!connected);
    };

    const handleToggleVoterStatus = () => {
        setVoterStatus(active);
    };

    return (
        <div>
            <Dropdown
                arrowIcon={false}
                inline
                label={
                    <Avatar
                        alt="User"
                        img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        rounded
                    />
                }
            >
                <Dropdown.Header>
                    <span className="block text-xs">Status Akun</span>
                    <div>
                        <span className="block text-sm font-bold">
                            {connected
                                ? "Sudah Terkoneksi"
                                : "Belum Terkoneksi"}
                        </span>
                    </div>
                </Dropdown.Header>
                {/* Tambahkan item ini hanya jika terkoneksi */}
                {connected && (
                    <>
                        <Dropdown.Item>no_akun</Dropdown.Item>
                        <Dropdown.Item className="grid border border-neutral-900">
                            {" "}
                            <span className="block text-xs text-left">
                                Status Pilih
                            </span>
                            <div>
                                <span
                                    className={`block text-sm text-left font-bold ${
                                        active
                                            ? "text-lime-700"
                                            : "text-red-700"
                                    }`}
                                >
                                    {active ? "Aktif" : "NonAktif"}
                                </span>
                            </div>
                        </Dropdown.Item>
                    </>
                )}
                <Dropdown.Item
                    onClick={handleToggleConnection}
                    className={`text-sm ${
                        connected ? "text-red-700" : "text-lime-700"
                    }`}
                >
                    {connected ? "Putuskan Koneksi" : "Sambungkan"}
                </Dropdown.Item>
                <Dropdown.Item>Switch Theme</Dropdown.Item>
            </Dropdown>
        </div>
    );
}
export function NavBar() {
    return (
        <Navbar fluid rounded>
            {/* Ini adalah bagian Favicon */}
            <Navbar.Brand as={Link} href="/">
                <Image src={Favicon} className="mr-3 h-9 w-9" alt="Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Gerbang Suara
                </span>
            </Navbar.Brand>
            {/* Ini bagian Avatar (Account) */}
            <div className="flex md:order-2">
                <NavAccount />
                <Navbar.Toggle />
            </div>

            {/* Menu pada Navbar */}
            <Navbar.Collapse>
                <Navbar.Link href="/about">Tentang</Navbar.Link>
                <Navbar.Link href="/guidline">Panduan</Navbar.Link>
                <Navbar.Link href="/stat">Statistik</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
