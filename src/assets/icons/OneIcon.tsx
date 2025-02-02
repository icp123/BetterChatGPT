import React from 'react';

const OneIcon = () => {
    const info_str = localStorage.getItem('userInfo');
    if (info_str) {
        var info = JSON.parse(info_str);
        return (
            <img src={info.avatar}></img>
        );
    }
    return (
        <svg
            stroke='currentColor'
            fill='none'
            strokeWidth='2'
            viewBox='0 0 24 24'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='h-4 w-4'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
            <circle cx='12' cy='7' r='4'></circle>
        </svg>
    );
};

export default OneIcon;
