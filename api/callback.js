import { serialize } from "cookie";

export default function handler(req, res) {
    if (req.method === "GET") {
        const { token } = req.query;

        if (token) {
            // Set cookie agar user dianggap sudah melewati Linkvertise
            res.setHeader("Set-Cookie", serialize("verified", "true", {
                path: "/",
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                maxAge: 60 * 10 // 10 menit
            }));

            res.writeHead(302, { Location: "/success" });
            res.end();
        } else {
            res.status(400).json({ error: "Verifikasi gagal! Token tidak ditemukan." });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
