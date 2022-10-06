import { useEffect, useState } from 'react';

const initialState = {
  charCode: 0,
  code: '',
  key: '',
  keyCode: 0,
};

function App() {
  const [key, setKey] = useState(initialState);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const { charCode, code, key, keyCode } = e;
      setKey({
        charCode,
        code,
        key,
        keyCode,
      });
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='h-screen bg-black text-white'>
      <div className='flex flex-col items-center justify-center h-full'>
        <div className='text-2xl font-bold'>Key Down</div>
        <div className='text-xl font-bold'>charCode: {key.charCode}</div>
        <div className='text-xl font-bold'>code: {key.code}</div>
        <div className='text-xl font-bold'>key: {key.key}</div>
        <div className='text-xl font-bold'>keyCode: {key.keyCode}</div>
      </div>
    </div>
  );
}

export default App;
