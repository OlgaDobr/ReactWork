const menu = [{ id: 1, name: 'Бургер', price: 150 },
  { id: 2, name: 'Картофель фри', price: 100 },
  { id: 3, name: 'Кока-кола', price: 50 },
  { id: 4, name: 'Чизбургер', price: 180 },
  { id: 5, name: 'Наггетсы', price: 120 },
];
const Menu = () => {
    return (
        <div>
            <ul>
           { menu.map(item => {
            return(
                <li key={item.id}>
                    {item.name}
                </li>
            )
           })}

            </ul>
        </div>
       
    )
}

export default Menu;