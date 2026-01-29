import axios from "axios";

const API_URL = import.meta.env.PROD
	? "https://hbdgen.onrender.com"
	: "http://localhost:5000";

const api = axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export interface BirthdayCard {
	_id?: string;
	userId?: string;
	firstname: string;
	lastname: string;
	music: string;
	cards: {
		title: string;
		message: string;
	}[];
	createdAt?: Date;
}

export interface ValentineCard {
	_id?: string;
	nickname: string;
	music: string;
	card: {
		title: string;
		message: string;
	};
	createdAt?: Date;
}

export const setApiToken = (token: string | null) => {
	if (token) {
		api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	} else {
		delete api.defaults.headers.common["Authorization"];
	}
};

export const birthdayCardService = {
	getAll: async (): Promise<BirthdayCard[]> => {
		const response = await api.get("/birthday/cards");
		return response.data;
	},
	getById: async (id: string): Promise<BirthdayCard> => {
		const response = await api.get(`/birthday/cards/${id}`);
		return response.data;
	},
	create: async (card: Omit<BirthdayCard, "_id">): Promise<BirthdayCard> => {
		const response = await api.post("/birthday/cards", card);
		return response.data;
	},
	update: async (id: string, card: Partial<BirthdayCard>): Promise<BirthdayCard> => {
		const response = await api.put(`/birthday/cards/${id}`, card);
		return response.data;
	},
	delete: async (id: string): Promise<void> => {
		await api.delete(`/birthday/cards/${id}`);
	},
};

export const valentineCardService = {
	getAll: async (): Promise<ValentineCard[]> => {
		const response = await api.get("/valentine/cards");
		return response.data;
	},
	getById: async (id: string): Promise<ValentineCard> => {
		const response = await api.get(`/valentine/cards/${id}`);
		return response.data;
	},
	create: async (card: Omit<ValentineCard, "_id">): Promise<ValentineCard> => {
		const response = await api.post("/valentine/cards", card);
		return response.data;
	},
	update: async (id: string, card: Partial<ValentineCard>): Promise<ValentineCard> => {
		const response = await api.put(`/valentine/cards/${id}`, card);
		return response.data;
	},
	delete: async (id: string): Promise<void> => {
		await api.delete(`/valentine/cards/${id}`);
	},
};

