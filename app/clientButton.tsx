"use client";

import React, { useEffect } from "react";

const ClientButton = () => {
    useEffect(() => {
        console.log("✅ Telegram WebApp найден!");
    }, []);

    return <button>Continue</button>;
};

export default ClientButton;

