const bookListData = [
  {
    id: 1,
    title: 'Foundation',
    author: 'A. Asimov',
    cover: 'https://images-na.ssl-images-amazon.com/images/I/51PQP4bCDZL.jpg',
  },
  {
    id: 2,
    title: 'Foundation and Empire',
    author: 'A. Asimov',
    cover: 'https://m.media-amazon.com/images/I/91GMN74HkyS._AC_UY218_.jpg',
  },
  {
    id: 3,
    title: 'Second Foundation',
    author: 'A. Asimov',
    cover: 'https://images-na.ssl-images-amazon.com/images/I/51qa+eq4QwL.jpg',
  },
  {
    id: 4,
    title: 'The Three-Body Problem',
    author: 'Cixin Liu',
    cover: 'https://m.media-amazon.com/images/I/51E28X-SNTL._SY300_.jpg',
  },
  {
    id: 5,
    title: 'The Dark Forest',
    author: 'Cixin Liu',
    cover: 'https://m.media-amazon.com/images/I/51uMT8RVWNL._SY300_.jpg',
  },
  {
    id: 6,
    title: 'Death\'s End',
    author: 'Cixin Liu',
    cover: 'https://m.media-amazon.com/images/I/51c53zPSTqL._SY300_.jpg',
  },
];

export default class BookstoreService {
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(bookListData)
          // reject(new Error('Test Error'))
        }, 1500
      );
    })
  }
}
