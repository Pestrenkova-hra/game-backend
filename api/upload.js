export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { player, score, level } = req.body;

        if (!player || typeof score !== 'number' || typeof level !== 'number') {
            return res.status(400).json({ error: 'Neplatná data' });
        }

        try {
            console.log('Přijatá data:', { player, score, level });

            res.status(200).json({ success: true, message: 'Data byla uložena!' });
        } catch (error) {
            console.error('Chyba při zpracování dat:', error);
            res.status(500).json({ error: 'Chyba serveru' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
