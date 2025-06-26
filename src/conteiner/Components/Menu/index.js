const menu = [
  { id: 1, name: 'Бургер', price: 150, imagesrc:"../image/img_3911_500_306_5_100.jpg" },
  { id: 2, name: 'Картофель фри', price: 100, imagesrc:"../image/images.jpeg" },
  { id: 3, name: 'Кока-кола', price: 50, imagesrc:"../image/316170519062020.jpg" },
  { id: 4, name: 'Чизбургер', price: 180, imagesrc:"../image/wPcXo2NyghcHBNVFNEficPd2kNnXhm-metaNTAweDUwMF9EQl9DSC5wbmc=-.png" },
  { id: 5, name: 'Наггетсы', price: 120, imagesrc:"../image/nagetsi.jpg" },
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