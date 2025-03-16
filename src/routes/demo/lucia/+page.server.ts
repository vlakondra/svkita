//----------------
import { env } from '$env/dynamic/private';
import { DATABASE_URL } from '$env/static/private';
import { SCHEMA_PATH } from '$env/static/private';
console.log(process.env.DATABASE_URL,
	DATABASE_URL,
	SCHEMA_PATH,
	env.COMPUTERNAME)
//----------------

import * as auth from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		return redirect(302, '/demo/lucia/login');
	}
	return { user: event.locals.user };
};

export const actions: Actions = {
	logout: async (event) => {
		if (!event.locals.session) {
			return fail(401);
		}
		await auth.invalidateSession(event.locals.session.id);
		auth.deleteSessionTokenCookie(event);

		return redirect(302, '/demo/lucia/login');
	}
};
