import React from 'react'


const checkCategory = (category) => {
  switch (category) {
    case "Books":
      return 'книг'
      break;
    case "Journals":
      return 'журналов'
      break;
    case "Booklets":
      return 'буклетов'
      break;
  }
}

const LibraryLists = ({lists, category, onRemove}) => {
    const categoryTitle = checkCategory(category);
    console.log(category);
    return (
      <div>
        <div className="list__title">Количество {categoryTitle}: <span>{lists[category].length}</span></div>
        {lists[category].map((list, i) =>
        <div className="list__item"  key={list.id}>
          <div className="list__name"><span className="bordeless">«{list.name}»</span></div>
          <div className="list__year">{list.year}г</div>
          <div className="list__count">{list.count}<span>cтраниц</span></div>
          <div className="list__publisher">{list.publisher}</div>
          <div className="list__delete" onClick={() => onRemove(list.id, category)}>&#10006;</div>
        </div>
        )}
      </div>
    )
}

export default LibraryLists
