'use client'

export default function NotFound({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {

    return (
        <div>
            <h2>404 Page not found</h2>
        </div>
    )
}