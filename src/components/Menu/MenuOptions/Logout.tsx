import React, { startTransition, useState } from 'react';
import LogoutIcon from '@icon/LogoutIcon';
import { useTranslation } from 'react-i18next';
import useStore from '@store/store';
import PopupModal from '@components/PopupModal';

const Logout = () => {
    const { t } = useTranslation();

    const setAuthData = useStore((state) => state.setAuthData);
    const getAuthData = useStore((state) => state.authData);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleConfirm = () => {
        setIsModalOpen(false);
        setAuthData({ address: '', message: '', signature: '' });
        location.reload()
    };

    var addr = "";
    if (getAuthData?.address) {
        var addr = ": " + getAuthData?.address.substring(0, 5) + '...' + getAuthData?.address.substring(38)
    }

    return (
        <>
            <a className='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm'
                onClick={() => {
                    setIsModalOpen(true);
                }}
            >
                <LogoutIcon />
                {t('logout')} {addr}
            </a>
            {isModalOpen && (
                <PopupModal
                    setIsModalOpen={setIsModalOpen}
                    title={t('logout') as string}
                    message={t('logoutWarning') as string}
                    handleConfirm={handleConfirm}
                />
            )}
        </>
    );
};

export default Logout;
