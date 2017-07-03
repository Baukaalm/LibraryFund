import React from "react";
import { checkCategory } from "../helpers";

const LibraryLists = ({ lists, category, onRemove }) => {
  const categoryTitle = checkCategory(category);
  const IsMissing = lists[category].length === 0;

  return (
    <div>
      <div className="list__title">
        Количество {categoryTitle}: <span>{lists[category].length}</span>
      </div>
      {!IsMissing
        ? lists[category].map((list, i) =>
            <div className="list__item" key={list.id}>
              <div className="list__name">
                <span className="bordeless">
                  «{list.name}»
                </span>
              </div>
              <div className="list__year">
                {list.year}г
              </div>
              <div className="list__count">
                {list.count}
                <span>cтраниц</span>
              </div>
              <div className="list__publisher">
                {list.publisher}
              </div>
              <div
                className="list__delete"
                onClick={() => onRemove(list.id, category)}
              >
                &#10006;
              </div>
            </div>
          )
        : <div className="list__notfound">
            Публикации отсутствуют, добавьте новую публикацию
          </div>}
    </div>
  );
};

export default LibraryLists;
