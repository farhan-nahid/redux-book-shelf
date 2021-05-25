import React from 'react';
import { HiCheckCircle, HiMinusCircle } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { AddToFinishList, RemoveFromReadingList } from '../../Redux/Actions/BookActions';
import styles from '../Book/book.module.css';
  

const ReadingBook = (props) => {
    const dispatch = useDispatch()
    const { title, author, coverImageUrl, synopsis } = props.book;

    return (
        <div className='card d-flex mb-3 p-3' 
        style={{position: 'relative'}}
      >
        <div className='row'>
          <div className='col-md-3'>
            <img className="img-fluid" src={coverImageUrl} alt='' />
          </div>
          <div className='col-md-9'>
            <div className='card-body'>
              <h5 className='card-title'>{title}</h5>
              <h6>{author}</h6>
              <p className='card-text'>{synopsis.slice(0, 500)} ...</p>
            </div>
          </div>
        </div>
        <div className={styles.control_icons} >
          <HiMinusCircle onClick={()=> dispatch(RemoveFromReadingList(props.book.id))} title="Remove from list" className={styles.minus_icon} />
          {/* <HiPlusCircle  title="Add to Reading" className={styles.plus_icon} /> */}
          <HiCheckCircle onClick={()=> dispatch(AddToFinishList(props.book))} title="Mark as Finish" className={styles.check_icon} />
        </div>
      </div>
    );
};

export default ReadingBook;