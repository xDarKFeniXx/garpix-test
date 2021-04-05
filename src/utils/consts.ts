
export const AUTHORS='/authors'
export const BOOKS='/books'

export const BOOKS_NEW_URL=BOOKS+'/new'
export const AUTHORS_NEW_URL=AUTHORS+'/new'
export const booksEditPath=(id:number)=>BOOKS+'/'+id+'/edit'
export const authorsEditPath=(id:number)=>AUTHORS+'/'+id+'/edit'
