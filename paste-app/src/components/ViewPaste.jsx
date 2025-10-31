
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams ,useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';


const ViewPaste = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const allPastes = useSelector((state) => state.paste.pastes) || [];

  const paste = allPastes.find((p) => String(p._id) === String(id))

  console.log("final Paste:", paste);

  if (!paste) {
    return (
      <div className="text-red-500 text-lg mt-10 text-center">
        ❌ Paste not found!
      </div>
    );
  }

  return (
    <div>
      <div className=' flex flex-row gap-7 place-content-between'>
        <input
          className='p-1 rounded-2xl mt-2 w-[50%] pl-3'
          type="text"
          placeholder="Enter title here..."
          value={paste?.title || ""}
          disabled


        />

        {/* <button
                    onClick={createPaste}
                    className='p-6 rounded-2xl mt-2'>
                    {
                        pasteId ? "Update my Paste" : "Create my Paste"
                    }
                </button>*/}
      

      </div>
      <div className='mt-8'>
        <textarea
          className='rounded-2xl mt-4 min-w-[500px] p-4'

          placeholder='Enter content here...'
          disabled
          value={paste?.content || ""}

          rows={50}
        >
        </textarea>
      </div>
    </div>
  )
}

export default ViewPaste
