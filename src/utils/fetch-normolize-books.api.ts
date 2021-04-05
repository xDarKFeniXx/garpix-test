import {authors, books} from "../db";
import { INormalizeBook } from "../types/book.interface";

export const fetchNormalizeBooks =  (): INormalizeBook[] => {

        return books.map(book => {
            const author = authors.filter(author => author.id === book.author_id)[0]
            return (
                {
                    ...book,
                    author_first_name: author.first_name,
                    author_last_name: author.last_name,
                    link: `/books/${book.id}`,
                    // created_at: new Date(+book.created_at)

                })
       })
}
