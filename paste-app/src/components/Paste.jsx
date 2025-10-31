import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeAllPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const Paste = () => {

  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const filteredData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeAllPastes(pasteId));

  }





  return (
    <div>
      <input
        className='p-2 rounded-2xl min-w-[600px] mt-5 bg-red-200'
        type='search'
        placeholder='search here'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className='flex flex-col gap-5 mt-8   bg-blue-200'>
        {
          filteredData.length > 0 &&
          filteredData.map(
            (paste) => {
              return (
                <div className='border' key={paste?._id}>
                  <div>
                    {paste.title}
                  </div>
                  <div>
                    {paste.content}
                  </div>
                  <div className='flex flex-row gap-5 place-content-evenly '>
                    <button>
                      edit
                    </button>
                    <button>
                      view
                    </button>
                    <button onClick={() => handleDelete(paste?._id)}>
                      delete
                    </button>
                    <button onClick={() => {
                      navigator.clipboard.writeText(paste?.content)
                      toast.success('Content copied to clipboard')
                    }}>
                      copy
                    </button>
                    <button>
                      share
                    </button>
                  </div>
                  <div>
                    {paste.createdAt}
                  </div>
                </div>
              )
            }
          )
        }

      </div>
    </div >
  )
}

export default Paste
