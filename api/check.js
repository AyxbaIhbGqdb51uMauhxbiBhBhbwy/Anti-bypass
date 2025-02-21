export default function handler(req, res) {
    const verified = req.cookies?.verified === "true";
    res.json({ verified });
}
