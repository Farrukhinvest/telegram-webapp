import React, { useEffect } from 'react';

const ClientButton = () => {
    useEffect(() => {
        if (typeof window !== "undefined" && window.Telegram?.WebApp) {
            console.log("✅ Telegram WebApp найден!");
        } else {
            console.log("❌ Telegram WebApp НЕ найден!");
        }
    }, []);

    const handleClick = () => {
        console.log("🟢 Кнопка нажата!");
        if (typeof window !== "undefined" && window.Telegram?.WebApp) {
            console.log("✅ Telegram WebApp найден!");
            window.Telegram.WebApp.sendData("User clicked continue!");
            window.Telegram.WebApp.close();
        } else {
            console.log("❌ Telegram WebApp НЕ найден!");
        }
    };

    return <button onClick={handleClick}>Continue</button>;
};

export default ClientButton;
