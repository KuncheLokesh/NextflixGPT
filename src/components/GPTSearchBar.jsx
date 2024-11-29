import React from 'react'
import { useSelector } from 'react-redux';
import languageConstants from '../uitls/languageConstants';

const GPTSearchBar = () => {


const chosenLanguage=useSelector(state=>state.language.langugePrefered);

  return (
    <div className='mt-[10%] flex justify-center'>

        <form className='w-1/2 grid grid-cols-12'>
            <input type='text' className='col-span-9 p-2 bg-gray-300  text-white rounded-lg' placeholder={languageConstants[chosenLanguage].searchPlaceHolder}/>
            <button className=' col-span-3 m-2 p-2 bg-red-600 rounded-lg'>{languageConstants[chosenLanguage].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar;