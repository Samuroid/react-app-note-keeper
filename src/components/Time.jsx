import React, { useState, useEffect } from "react";

function Time(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const time = () =>{
            const date = new Date();
            setTime( date.toLocaleTimeString() );
        }

        const timer = setInterval( time, 1000 );

        return () => {
            clearInterval(timer)
        };
    }, []);

    // function updateTime(){
    //     const newTime = new Date().toLocaleTimeString();
    //     setTime( newTime );
    // }

    // setInterval(updateTime(), 2000);

    return <p className="clock">{time}</p>;
}

export default Time;