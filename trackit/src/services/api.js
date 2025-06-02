// src/services/api.js

const API_URL = 'http://localhost:3000/api/habits';

export async function fetchHabits() {
	try {
		const res = await fetch(API_URL);
		return await res.json();
	} catch (err) {
		console.error('Error fetching habits:', err);
		throw err;
	}
}

export async function createHabit(name) {
	try {
		const res = await fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ habit: { name } })
		});
		return await res.json();
	} catch (err) {
		console.error('Error creating habit:', err);
		throw err;
	}
}

export async function deleteHabit(id) {
	try {
		await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
	} catch (err) {
		console.error('Error deleting habit:', err);
		throw err;
	}
}

export async function markHabitDone(id) {
	try {
		const res = await fetch(`${API_URL}/${id}/mark_done`, {
			method: 'POST'
		});
		return await res.json();
	} catch (err) {
		console.error('Error marking habit as done:', err);
		throw err;
	}
}
