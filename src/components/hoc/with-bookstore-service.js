import React from 'react';
import { BookstoreServiceConsumenr } from '../context';

const withBookstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServiceConsumenr>
        {
          (bookstoreService) => {
            return (<Wrapped {...props}
                             bookstoreServcie={bookstoreService}/>);
          }
        }
      </BookstoreServiceConsumenr>
    );
  }
}

export default withBookstoreService;
