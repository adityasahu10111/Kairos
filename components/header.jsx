"use client"

import { SignedIn, SignedOut, SignInButton, SignUpButton, useAuth, UserButton } from '@clerk/nextjs'
import { Authenticated, Unauthenticated } from 'convex/react'
import Image from 'next/image'
import Link from 'next/link'
import { useConvexAuth } from "convex/react";
import { BarLoader } from "react-spinners";




import React from 'react'
import { useStoreUser } from '@/hooks/use-store-user'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

export default function Header() {
    const { isLoading } = useStoreUser();
    return (
        <>

            <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/kairos_log.png"
                            alt="Kairos logo"
                            width={500}
                            height={500}
                            className="w-full h-11"
                            priority
                        />
                    </Link>

                    <div className="flex items-center">
                        <Authenticated>
                            <Button variant="ghost" size="sm" asChild>
                                <Link href="/">Pricing</Link>
                            </Button>

                            <Button variant="ghost" size="sm" asChild>
                                <Link href="/">Explore</Link>
                            </Button>

                            <Button size="sm" asChild className="flex gap-2 mr-3">
                                <Link href="/">
                                    <Plus className="w-4 h-4" />
                                    <span className="hidden sm:block">Create Event</span>
                                </Link>
                            </Button>

                            <UserButton
                                afterSignOutUrl="/"
                                appearance={{
                                    elements: {
                                        avatarBox: "w-9 h-9",
                                    },
                                }}
                            />
                        </Authenticated>

                        <Unauthenticated>
                            <Button
                                variant="ghost"
                                size="sm"
                                asChild
                                className="hidden sm:flex"
                            >
                                <Link href="/explore">Explore Events</Link>
                            </Button>

                            <SignInButton mode="modal">
                                <Button size="sm">Sign In</Button>
                            </SignInButton>
                        </Unauthenticated>
                    </div>
                </div>

                {isLoading && (
                    <div className="absolute bottom-0 left-0 w-full">
                        <BarLoader width={"100%"} color="#a855f7" />
                    </div>
                )}
            </nav>

        </>
    )
}
