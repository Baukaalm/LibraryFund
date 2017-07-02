const PRODUCTS = () => {
  return JSON.parse(localStorage.getItem('products')) || {
    Journals: [
      {
        id: 1,
        name: 'Тестовый Журнал 0',
        year: 2000,
        count: 323,
        publisher: 'Default pulisher'
      }, {
        id: 2,
        name: 'Тестовая Журнал 1',
        year: 2001,
        count: 123,
        publisher: 'Default pulisher'
      }, {
        id: 3,
        name: 'Тестовый Журнал 2',
        year: 2011,
        count: 25,
        publisher: 'Default pulisher'
      }, {
        id: 4,
        name: 'Тестовый Журнал 3',
        year: 2011,
        count: 434,
        publisher: 'Default pulisher'
      }, {
        id: 5,
        name: 'Тестовый Журнал 4',
        year: 2011,
        count: 543,
        publisher: 'Default pulisher'
      }, {
        id: 6,
        name: 'Тестовый Журнал 5',
        year: 2011,
        count: 1230,
        publisher: 'Default pulisher'
      }, {
        id: 7,
        name: 'Тестовый Журнал 6',
        year: 2011,
        count: 3432,
        publisher: 'Default pulisher'
      }, {
        id: 8,
        name: 'Тестовый Журнал 7',
        year: 2011,
        count: 423,
        publisher: 'Default pulisher'
      }, {
        id: 9,
        name: 'Тестовый Журнал 8',
        year: 2011,
        count: 343,
        publisher: 'Default pulisher'
      }, {
        id: 10,
        name: 'Тестовый Журнал 9',
        year: 2011,
        count: 2131,
        publisher: 'Default pulisher'
      }
    ],
    Books: [
      {
        id: 1,
        name: 'Тестовая книга 0',
        year: 2004,
        count: 435,
        publisher: 'Default pulisher'
      }, {
        id: 2,
        name: 'Тестовая книга 1',
        year: 2016,
        count: 534,
        publisher: 'Default pulisher'
      }, {
        id: 3,
        name: 'Тестовая книга 2',
        year: 2007,
        count: 768,
        publisher: 'Default pulisher'
      },
      {
        id: 4,
        name: 'Тестовая книга 3',
        year: 2008,
        count: 342,
        publisher: 'Default pulisher'
      },
      {
        id: 5,
        name: 'Тестовая книга 4',
        year: 1998,
        count: 423,
        publisher: 'Default pulisher'
      },
      {
        id: 6,
        name: 'Тестовая книга 5',
        year: 1654,
        count: 1223,
        publisher: 'Default pulisher'
      },
      {
        id: 7,
        name: 'Тестовая книга 6',
        year: 143,
        count: 1997,
        publisher: 'Default pulisher'
      },
      {
        id: 8,
        name: 'Тестовая книга 7',
        year: 1999,
        count: 221,
        publisher: 'Default pulisher'
      },
      {
        id: 9,
        name: 'Тестовая книга 8',
        year: 1778,
        count: 766,
        publisher: 'Default pulisher'
      }
    ],
    Booklets: [
      {
        id: 1,
        name: 'Тестовый Буклет',
        year: 2011,
        count: 25,
        publisher: 'Default pulisher'
      }, {
        id: 2,
        name: 'Тестовая Буклет 2',
        year: 2011,
        count: 25,
        publisher: 'Default pulisher'
      }
    ]
  }
}
export default PRODUCTS
