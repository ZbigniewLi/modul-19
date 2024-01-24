const initialState = {
    posts: [
      {
        id: '1',
        title: 'First Article',
        shortDescription: 'Short description of the first article...',
        category: 'Movies',
        content: 'Main content of the first article',
        publishedDate: new Date('02-02-2022'),
        author: 'John Doe'
      },

      {
        id: '2',
        title: 'Second Article',
        shortDescription: 'Short description of the second article...',
        category: 'News',
        content: 'Main content of the second article',
        publishedDate: new Date('02-02-2022'),
        author: 'Jane Smith'
      },

      {
        id: '3',
        title: 'Third Article',
        shortDescription: 'Short description of the third article...',
        category: 'Sport',
        content: 'Main content of the Third article',
        publishedDate: new Date('02-02-2022'),
        author: 'Mark Rodgers'
      },
    ],

    categories: ['Sport', 'News', 'Movies']

  };
  
  export default initialState;


