import React from 'react';

function Categories({ items }) {
  /*
  Чтобы обновлять состояния, первое это переменная, 
  а второе это функция, которая одновляет её и ререндерит сайт
  */
  const [activItem, setActivItem] = React.useState(null);
  const onSelectItem = (index) => {
    setActivItem(index);
  };

  return (
    <div className="categories">
      <ul>
        {/* 
        Индект чисто для того чтобы был максимально уникальный ключ, типо
        если оставить только name, то для одинаковых названий категорий будет инспектиться ошибка
        name - это сами переменные, а index - это типо индекс элемента 
        [a, b, zxc, pudge] => 
        <li key={a_1}></li>
        <li key={b_2}></li>
        <li key={zxc_3}></li>
        ...
        Можно передавать только индекс, но это не круто
         */}
        <li className={activItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {/* items && более короткая форма if
        Типо лайвхак, если ты не передал ничего в items, то метод map тригирнет ошибнку,
        а так получиться, что он просто не будет выполнять его, потому что items пустой  */}
        {items &&
          items.map((name, index) => (
            <li
              className={activItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
