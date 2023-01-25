import avatarCardDefault from './../img/cards/card-avatar-default.jpg'
import avatarCard1 from './../img/cards/card-avatar-1.png'
import avatarCard2 from './../img/cards/card-avatar-2.jpg'
import avatarCard3 from './../img/cards/card-avatar-3.jpg'
import avatarCard4 from './../img/cards/card-avatar-4.jpg'

const cards = [
    {
        id: 1,
        name: 'Александр "Simple" Костылев',
        activity: 'CS:GO', 
        experience: 9,
        city: 'Екатеринбург',
        description: 'Игрок в КС со стажем, победитель многих соревнований. Три хэдшота ван тапами в каждом раунде - норма. Научит правильно общаться с чатом и профессионально уворачиваться от флешки.',
        image: avatarCard1,
        rating: 4.8,
        reviews: 228,
        price: 2000,
        employment: 'Онлайн',
        requirements: 'Желание развиваться',
        
    },

    {
        id: 2,
        name: 'Костя Цзю',
        activity: 'Бокс', 
        experience: 30,
        city: '',
        description: 'Советский, российский и австралийский боксёр, трёхкратный чемпион СССР, двукратный чемпион Европы и чемпион мира среди любителей, абсолютный чемпион мира среди профессионалов. Заслуженный мастер спорта СССР. «Выдающийся боксёр СССР»',
        image: avatarCard3,
        rating: 4.98,
        reviews: 240
    },

    {
        id: 3,
        name: 'Цареградцев Аркадий Петрович',
        activity: 'Автоспорт', 
        experience: 20,
        city: '',
        description: 'Российский автогонщик-дрифтер, организатор, судья, чемпион Сибири 2013, 2014 и 2016 года, чемпион RDS GP 2022. В настоящее время выступает в отделении Российской Дрифт Серии GP',
        image: avatarCard2,
        rating: 5.0,
        reviews: 262
    },


    {
        id: 4,
        name: 'Воробьев Владимир Николаевич',
        activity: 'География', 
        experience: 30,
        city: '',
        description: 'Доцент, кандидат географических наук, выпускник МГУ им. М.В. Ломоносова. Опыт подготовки в ведущие ВУЗы - более 15 лет. В активе 100-балльники и победители олимпиад.',
        image: avatarCardDefault,
        rating: 4.3,
        reviews: 53
    },

    {
        id: 5,
        name: 'Анастасия Морозова',
        activity: 'Дрессировка собак', 
        experience: 6,
        city: '',
        description: 'Дипломированный кинолог. Более 6 лет я работаю в сфере кинологии, 3 года консультирующий зоопсихолог, работа с проблемными собаками — социализация, агрессия из-за страха, неконтролируемое поведение, фобии, стандартные проблемы.',
        image: avatarCard4,
        rating: 5,
        reviews: 19
    }
];

export {cards}