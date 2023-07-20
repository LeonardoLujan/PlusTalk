"use client";

interface ErrorPagePropa {
    error: Error,
    reset: () => void,
}

export default function Error({error, reset}: ErrorPageProps) {
    return(
        <div>
            <h1>
                <p>
                    Something went wrong
                </p>
                <button onClick={reset}> Try Again</button>

            </h1>
        </div>
    );


}