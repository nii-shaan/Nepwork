import React from "react";
import { useAuth } from "../stores/Auth";

function Home() {
    const isLoggedIn = useAuth((state) => state.isLoggedIn);

    if (isLoggedIn) {
        return (
            <>
                <div className="bg-secondary text-center min-h-[800px]">
                    You're Logged in{" "}
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="bg-secondary text-center min-h-[800px]">
                    You're not Logged in
                </div>
            </>
        );
    }
}

export default Home;
