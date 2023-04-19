const initialState = {
  lists: [
    {
      id: '1',
      title: 'Things to do...',
      description: 'Interesting things I want to check out'
    },
    {
      id: '2',
      title: 'Test list',
      description: 'Lorem Ipsum'
    }
  ],

  columns: [
    {
      listId: '1',
      id: '1',
      title: 'Books',
      icon: 'book',
    },
    {
      listId: '1',
      id: '2',
      title: 'Movies',
      icon: 'film',
    },
    {
      listId: '1',
      id: '3',
      title: 'Games',
      icon: 'gamepad',
    },
    {
      listId: '2',
      id: '4',
      title: 'Test',
      icon: 'car',
    }

  ],

  cards: [
    { id: '1', isFavorite: false, columnId: '1', title: 'This is Going to Hurt' },
    { id: '2', isFavorite: false, columnId: '1', title: 'Interpreter of Maladies' },
    { id: '3', isFavorite: false, columnId: '2', title: 'Harry Potter' },
    { id: '4', isFavorite: false, columnId: '2', title: 'Star Wars' },
    { id: '5', isFavorite: false, columnId: '3', title: 'The Witcher' },
    { id: '6', isFavorite: false, columnId: '3', title: 'Skyrim' }
  ],

  searchString: '',
};

  export default initialState;