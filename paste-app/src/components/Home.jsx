import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => String(p._id) === String(pasteId));
      if (paste) {
        setTitle(paste.title ||"");
        setValue(paste.content || "");

} else {
        setTitle('');
        setValue('');
      }
    } else {
      setTitle('');
      setValue('');
    }
  }, [pasteId, allPastes]);

  function createPaste() {
    const paste = {
      title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div>
      <div className='flex flex-row gap-7 place-content-between'>
        <input
          className='p-1 rounded-2xl mt-2 w-[50%] pl-3'
          type="text"
          placeholder="Enter title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />



        <button onClick={createPaste} className='p-6 rounded-2xl mt-2'>
          {pasteId ? "Update my Paste" : "Create my Paste"}
        </button>
      </div>

      <div className='mt-8'>
        <textarea
          className='rounded-2xl mt-4 min-w-[500px] p-4'
          placeholder='Enter content here...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={50}
        />
      </div>
    </div>
  );
};

export default Home;
