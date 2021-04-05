import {IBook} from "./types/book.interface";
import {IAuthor} from "./types/author.interface";

export const books:IBook[]=[
    {id:1, author_id:1, created_at:new Date(161747250623), title: 'Harry Potter. Chapter 1', description: 'Harry Potter is a series of seven fantasy novels written by British author, J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry\'s struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).'},
    {id:2, author_id:1, created_at:new Date(1617472506234), title: 'Harry Potter. Chapter 2', description: 'Harry Potter is a series of seven fantasy novels written by British author, J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry\'s struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).'},
    {id:3, author_id:1, created_at:new Date(1617472506234), title: 'Harry Potter. Chapter 3', description: 'Harry Potter is a series of seven fantasy novels written by British author, J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry\'s struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).'},
    {id:4, author_id:1, created_at:new Date(820789200000), title: 'A Song of Ice and Fire', description: 'A Song of Ice and Fire takes place in a fictional world in which seasons last for years and end unpredictably. Nearly three centuries before the events of the first novel, the Seven Kingdoms of Westeros were united under the Targaryen dynasty, establishing military supremacy through their control of dragons.'},
]



export const authors:IAuthor[]=[
    {id: 1, first_name: 'Joanne', last_name:'Rowling'},
    {id: 2, first_name: 'George', last_name:'Martin'},
]
