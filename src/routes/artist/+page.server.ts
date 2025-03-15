import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';

export const load = (async () => {
    try {
        const artResult:table.Artist[] = await db
            .select()
            .from(table.artists)
            .limit(5);

        return { artResult };
    } catch {
        return { err: 'Ошибка подключения к БД' }
    };




}) satisfies PageServerLoad;