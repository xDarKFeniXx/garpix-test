import React, {useState} from 'react';
import {INormalizeBook} from "../../types/book.interface";
import {IAuthor} from "../../types/author.interface";
import {Button, Input, Select} from 'antd';
import {useHistory} from 'react-router-dom';

interface IBookFormProps {
    book?: INormalizeBook,
    authors: IAuthor[],
    onSubmitCB: (newBook: INormalizeBook) => void
}

export const BookForm: React.FC<IBookFormProps> = ({authors, book, onSubmitCB}) => {
    const history = useHistory()
    const [title, setTitle] = useState(book?.title || '')
    const [description, setDescription] = useState(book?.description || '')
    const [authorId, setAuthorId] = useState(book?.author_id || 0)
    const [createdAt, setCreatedAt] = useState(book?.created_at || new Date())
    const dateForInput = new Date(createdAt).toLocaleDateString('fr-CA')
    console.log(dateForInput)
    const handleChangeSelect = (value: number) => {
        setAuthorId(value)
    }
    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value)
    }
    const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCreatedAt(new Date(e.target.value))
    }
    const handleSubmitForm = () => {
        const author = authors.find(author => author.id === authorId)
        const newBook: INormalizeBook = {
            title,
            description,
            created_at: createdAt,
            author_id: authorId,
            author_first_name: author?.first_name || '',
            author_last_name: author?.last_name || '',
            id: book?.id || undefined,
            link: book?.link || undefined
        }

        onSubmitCB(newBook)
        history.push('/books')
    }
    const options = authors.map(author => {
        return (
            <Select.Option value={author.id} key={author.id}>
                {author.first_name} {author.last_name}
            </Select.Option>
        )
    })
    return (
        <form>
            <div>
                <Select value={authorId} onChange={handleChangeSelect}>
                    <Select.Option value={0} disabled>Выберите автора</Select.Option>
                    {options}
                </Select>
                <Input placeholder='Title' value={title} onChange={handleChangeTitle}/>
                <Input.TextArea placeholder='Description' value={description} onChange={handleChangeDescription}
                                rows={5}/>
                <input type="date" onChange={handleChangeDate} value={dateForInput}/>
            </div>
            <Button onClick={handleSubmitForm}>Save</Button>
        </form>
    );
};

