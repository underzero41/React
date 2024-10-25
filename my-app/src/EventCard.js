import './EventCard.css';

function EventCard({title, location, date, propsBoolean}) {
    return(
        <div class="eventCard">
            <h2 style={{ color: propsBoolean ? 'green' : 'red' }}><span class="eventCard_title">Группа</span>"{title}"</h2>
            <h2><span className='eventCard_description'>Адрес: </span>{location}</h2>
            <h2><span className='eventCard_date'>Дата: </span>{date}</h2>
        </div>
    );
}

export default EventCard;