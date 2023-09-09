export interface Cat {
	id: string;
	url: string;
}

export interface FavouriteCat {
	id: number;
	user_id: string;
	image_id: string;
	sub_id: string;
	created_at: string;
	image: Cat;
}

export interface MarkCatAsFavouriteResponse {
	data: {
		id: number | string;
	};
}
