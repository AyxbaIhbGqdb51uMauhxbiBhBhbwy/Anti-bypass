import { useEffect, useState } from "react";

export default function Success() {
    const [verified, setVerified] = useState(false);

    useEffect(() => {
        // Cek apakah cookie 'verified' sudah ada
        fetch("/api/check")
            .then((res) => res.json())
            .then((data) => {
                if (data.verified) {
                    setVerified(true);
                } else {
                    window.location.href = "/"; // Balik ke Gateway jika belum verifikasi
                }
            });
    }, []);

    return (
        <div className="container">
            <h1>🎉 Berhasil!</h1>
            {verified ? (
                <p>Anda telah melewati Linkvertise. Selamat menikmati akses Anda!</p>
            ) : (
                <p>Mengecek status...</p>
            )}
        </div>
    );
}
