import React from 'react';
import Link from "next/link";
import {FaTree} from 'react-icons/fa';

import styles from "./styles.module.css";

function Header() {
    return (
        <header className={`${styles.header} container fluid`}>
            <div className={styles.headerWrapper}>
                <Link href="/"  className={styles.logo}>
                    <FaTree/> KASTAMONU
                </Link>
                <nav className={styles.navigationMenu}>
                    <Link href='/'>Gallery</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;

/*
                    <Link href='/nature'>Nature</Link>
                    <Link href='/buildings'>Buildings</Link>
                    <Link href='/macro'>Macro</Link>
                    <Link href='/tree-inside-trees'>Tree inside trees</Link>
                    <Link href='/mountain-strawberies'>Mountain strawberries</Link>
*/