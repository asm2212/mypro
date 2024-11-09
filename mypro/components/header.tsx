'use client'
import React from 'react'
import Link from 'next/link'
import { links } from '../lib/data'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { smoothScrollTo } from '@/lib/utils'
import { useActiveSectionContext } from '@/store/active-section-context'

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

    return (
        <header className="z-[99] relative">
            <motion.div
                className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-[#f4f3ee] border-opacity-40 bg-[#f2f3f5] bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[32rem] sm:rounded-full"
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
            />

            <ul className="flex items-center space-x-4">
                {links.map((link) => (
                    <motion.li
                        className="h-3/4 flex items-center justify-center relative"
                        key={link.id}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <Link
                            className={clsx(
                                'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition',
                                { 'text-gray-950': activeSection === link.id }
                            )}
                            href={link.id}
                            onClick={(e) => {
                                smoothScrollTo({ e, id: link.id })
                                setActiveSection(link.id)
                                setTimeOfLastClick(Date.now())
                            }}
                        >
                            {link.name}
                            {link.id === activeSection && (
                                <motion.span
                                    className="bg-gray-300 rounded-full absolute inset-0 -z-10"
                                    layoutId="activeSection"
                                    transition={{
                                        type: 'spring',
                                        stiffness: 380,
                                        damping: 30,
                                    }}
                                />
                            )}
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </header>
    )
}
