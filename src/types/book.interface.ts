export interface IBookDTO {
    title: string,
    author_id: number,
    description?: string,
    created_at: Date,
}

export interface IBook extends IBookDTO {
    id?: number,

}

export interface INormalizeBook extends IBook {
    author_first_name: string,
    author_last_name: string,
    link?: string,
}
