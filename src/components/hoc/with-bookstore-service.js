import React from 'react';
import {BookstoreServieConsumenr} from '../context';

const withBookstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServieConsumenr>
        {
          (bookstoreService) => {
            return (<Wrapped {...props}
                     bookstoreServcie={bookstoreService}/>);
          }
        }
      </BookstoreServieConsumenr>
    );
  }
}

export default withBookstoreService;
