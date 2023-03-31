import React, { useEffect, useState } from 'react';
import useStore from '@store/store';
import { useTranslation, Trans } from 'react-i18next';

import PopupModal from '@components/PopupModal';
import CrossIcon from '@icon/CrossIcon';
import { ethers } from 'ethers';

const ApiPopup = () => {
  const { t } = useTranslation(['main', 'api']);

  const apiKey = useStore((state) => state.apiKey);
  const authData = useStore((state) => state.authData);
  const setAuthData = useStore((state) => state.setAuthData);
  const setFirstVisit = useStore((state) => state.setFirstVisit);

  const [_apiKey, _setApiKey] = useState<string>(apiKey || '');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(!authData?.signature);
  const [error, setError] = useState<string>('');

  const handleConfirm = async () => {
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const accounts = await provider.send('eth_requestAccounts', []);
    if (!accounts) return setError('There is no account');
    const signer = provider.getSigner();
    if (!signer) throw new Error('getSigner error');
    const message = new Date().getTime() + '';
    const signature = await signer.signMessage(message);
    console.log(
      '%c [ signature ]-40',
      'font-size:13px; background:pink; color:#bf2c9f;',
      signature
    );

    setAuthData({ address: accounts[0], message, signature });

    setIsModalOpen(false);
  };

  useEffect(() => {
    setFirstVisit(false);
  }, []);

  return isModalOpen ? (
    <PopupModal
      title='Login'
      handleConfirm={handleConfirm}
      setIsModalOpen={setIsModalOpen}
      cancelButton={false}
      close={false}
      confirmText={'Login'}
    >
      <div className='p-10 border-b border-gray-200 dark:border-gray-600'>
        <div className='flex gap-2 items-center justify-center mt-2'>
          <div className='min-w-fit text-gray-900 dark:text-gray-300 text-sm'>
            Please login first!
          </div>
        </div>
      </div>
    </PopupModal>
  ) : (
    <></>
  );
};

export default ApiPopup;
