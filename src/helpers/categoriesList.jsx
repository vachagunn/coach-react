import category1 from './../img/slider/сategory-education.jpg'
import category2 from './../img/slider/category-sport.jpg'
import category3 from './../img/slider/category-cybersport.jpg'
import category4 from './../img/slider/category-creation.jpg'


const categories = [
    {
        id: 0,
        title: 'Образование',
        image: category1,
        items: ['Репетитор', 'Программирование', 'SMM']
    },

    {
        id: 1,
        title: 'Спорт',
        image: category2,
        items: ['Баскетбол', 'Футбол', 'Воллейбол', 'Хоккей', 'Теннис', 'Бокс', 'Плавание', 'Биатлон', 'Гимнастика', 'Сноуборд', 'Автоспорт', 'Велоспорт', 'Фехтование', 'Бег']
    },

    {
        id: 2,
        title: 'Киберспорт',
        image: category3,
        items: ['League of Legend', 'PUBG', 'Valorant', 'COD Warzone', 'Rocket League', 'Apex Legends', 'Dota 2', 'CS:GO', 'Fortnite', 'Overwatch', 'FIFA 2023']
    },

    {
        id: 3,
        title: 'Творчество',
        image: category4,
        items: []
    }
]

export {categories}