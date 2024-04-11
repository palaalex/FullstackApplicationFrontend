import React, { useEffect, useState } from 'react'

export default function useLocalState(defaultValue: string, key: string) {
    const [value, setValue] = useState(() => {
        const localStorageValue = localStorage.getItem(key);

        return localStorageValue !== null
            ? JSON.parse(localStorageValue)
            : defaultValue;
    });

    //console.log(`localStorageValue ${key} is: ${value}`);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}
