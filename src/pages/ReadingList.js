import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout/PageLayout';
import ReadingBook from '../components/ReadingBook/ReadingBook';

const ReadingList = () => {
    const books = useSelector((state) =>{
       return state.books.readingList
    })
    return (
        <PageLayout>
            
            {
                books.length > 0 ?
                books.map((book) => (<ReadingBook key={book.id} book={book} />))
                :  <p>Looks like you've finished all your books! Check them out in your <Link to="finish">finished books</Link> or <Link to="/">discover more</Link>.</p>
            }
           
        </PageLayout>
    );
};

export default ReadingList;