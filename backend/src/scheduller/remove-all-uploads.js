import cron from 'node-cron'
import { rm } from 'fs/promises';

cron.schedule('0 */5 * * * *', async () => {
    console.log('Tarefa executada a cada 5 minuto: Deletar todos uploads', new Date().toLocaleString());
    try {
        await rm('./uploads', { recursive: true, force: true });
        console.log('Pasta deletada com sucesso!');
    } catch (err) {
        console.error('Erro ao deletar a pasta:', err);
    }
});