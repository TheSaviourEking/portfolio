'use client'

import { useRouter } from "next/navigation"
import Button from "./ui/Button"

export function ViewAllButton({ disabled, to }: { disabled: boolean, to: string }) {
    const router = useRouter();

    return (
        <Button 
            disabled={disabled} 
            onClick={() => router.push(to)}
        >
            View All
        </Button>
    )
}