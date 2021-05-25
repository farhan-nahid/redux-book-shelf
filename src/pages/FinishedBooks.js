import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FinishedBook from "../components/FinishedBook/FinishedBook";
import PageLayout from "../components/PageLayout/PageLayout";

const FinishedBooks = () => {

  const books = useSelector((state) =>{
    return state.books.finishedList
 })

  return (
    <PageLayout>

      {
        books.length > 0 ?
        books.map((book) => (<FinishedBook key={book.id} book={book} />))
        :  <p>
        Hey there! This is where books will go when you've finished reading
        them. Get started by heading over to the <Link to='/'>Discover</Link>{" "}
        page to add books to your list.
      </p>
      }
      
    </PageLayout>
  );
};

export default FinishedBooks;
