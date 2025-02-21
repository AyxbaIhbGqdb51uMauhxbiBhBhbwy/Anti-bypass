import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        // Redirect otomatis ke Linkvertise setelah beberapa detik
        setTimeout(() => {
            window.location.href = "https://link-center.net/1236271/starx-te";
        }, 3000);
    }, []);

    return (
        <div className="container">
            <h1>🔗 Mengarahkan ke Linkvertise...</h1>
            <p>Silakan selesaikan iklan untuk melanjutkan ke halaman Success.</p>
        </div>
    );
}
