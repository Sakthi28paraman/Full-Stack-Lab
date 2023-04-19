import React,{useState} from 'react'
import book1 from './images/1.jpeg'
import book2 from './images/2.jpeg'
const books=[
  {
    id:1,
    title:'Mein Kampf',
    author:'Adolf Hitler',
    publisher:'Franz Eher Nachfolger GmbH',
    release_year:1925,
    image:book1
  },
  {
    id:2,
    title:'The song of Ice and Fire',
    author:'George R.R.Martin',
    publisher:'Bantam Books',
    release_year:1996,
    image:book2
  }
];
const App=()=>{
  const [releaseYearFilter, setReleaseYearFilter] = useState('');
  const [publisherFilter, setPublisherFilter] = useState('');
  const handleReleaseYearChange = (event) => {
    setReleaseYearFilter(event.target.value);
  };

  const handlePublisherChange = (event) => {
    setPublisherFilter(event.target.value);
  };

  const filteredBooks = books.filter((book) => {
    if (releaseYearFilter && book.release_year !== parseInt(releaseYearFilter)) {
      return false;
    }
    if (publisherFilter && book.publisher !== publisherFilter) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <h1>Book List</h1>
      <div>
        <label>Release Year:</label>
        <input type="text" value={releaseYearFilter} onChange={handleReleaseYearChange} />
      </div>
      <div>
        <label>Publisher:</label>
        <select value={publisherFilter} onChange={handlePublisherChange}>
          <option value="">All</option>
          <option value="Franz Eher Nachfolger GmbH">Franz Eher Nachfolger GmbH</option>
          <option value="Oxford">Oxford</option>
          <option value="Bantam Books">Bantam Books</option>
        </select>
      </div>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <img src={book.image} alt={book.title} />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.publisher}</p>
            <p>{book.release_year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
