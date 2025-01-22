// api/upload.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Získání dat z těla požadavku
        const { player, score, level } = req.body;

        // Ověření, že jsou data platná
        if (!player || typeof score !== 'number' || typeof level !== 'number') {
            return res.status(400).json({ error: 'Neplatná data' });
        }

        try {
            // Můžeš zpracovat data nebo je uložit do databáze
            console.log('Přijatá data:', { player, score, level });

            // Odeslání odpovědi zpět klientovi
            res.status(200).json({ success: true, message: 'Data byla uložena!' });
        } catch (error) {
            // Pokud dojde k chybě při zpracování
            console.error('Chyba při zpracování dat:', error);
            res.status(500).json({ error: 'Chyba serveru' });
        }
    } else {
        // Pokud není použit POST požadavek
        res.status(405).json({ error: 'Method not allowed' });
    }
}
