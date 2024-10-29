import React, { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // Устанавливаем интервал, который будет увеличивать время каждую секунду
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        // Очищаем интервал, когда компонент размонтируется
        return () => clearInterval(interval);
    }, []); // Пустой массив зависимостей означает, что эффект выполняется только один раз при монтировании

    return (
        <div>
            <h1>Таймер</h1>
            <p>Прошло секунд: {seconds}</p>
        </div>
    );

}

export default Timer;