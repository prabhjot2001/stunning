import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import { getRandomPrompts } from '../utils'
import { FormField, Loader } from '../components'


const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: ''
  })

  function handleSubmit(e) {
    e.preventDefault();
  
  }

  function handleChange(e) {
     setForm({...form, [e.target.name] : e.target.value})
  }

  function handleSurpriseMe() {
    const randomPrompt = getRandomPrompts(form.prompt);
    setForm({...form, prompt:randomPrompt})
  }

  async function generateImage(){
    if(form.prompt){
      try{
          setGeneratingImg(true);
          const response = await fetch('http://localhost:8080/api/v1/delle', {
            method: 'POST',
            headers : {'Content-Type': 'application/json',},
            body : JSON.stringify({prompt:  form.prompt}),
          })
          const data = await response.json();
          setForm({...form, photo: `data:image/jpeg;base64,${data.photo}`})
      }catch(e){
         alert(e)
      } finally{
        setGeneratingImg(false)
      }
    }else{
     alert('please enter prompt')
    }
  }

  const [generatingImg, setGeneratingImg] = useState(false)
  const [loading, setLoading] = useState(false)
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600'>Generate</h1>
        <p className='mt-2 text-[#666e75] text-[18px] max-w[500px]'>
          Your imagination is now reality
        </p>
      </div>

      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">

          <FormField labelName='your Name'  type='text' name='name' placeholder='Something' value={form.name} handleChange={handleChange} />


          <FormField labelName='Prompt' type='text' name='prompt' placeholder='Something' value={form.prompt} handleChange={handleChange} isSurpriseMe handleSurpriseMe={handleSurpriseMe} />
          

          <div className="relative bg-[#d4d4d4b7] text-sm rounded-lg w-64 p-3 h-64 flex justify-center items-center">
              {form.photo?(
                <img src={form.photo} alt={form.prompt} />
              ):(
                <img src={preview} className='w-9/12 h9/12 object-contain opacity-90'/>
              )}

              {
                generatingImg && (
                  <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0)] rounded-lg">
                    <Loader/>
                  </div>
                )
              }
          </div>

        </div>

        <div className="mt-5 flex gap-5">
              <button type='button' onClick={generateImage} className='text-white bg-green-600 rounded-lg block w-full p-3' >
                {generatingImg ? 'Generating...': 'Generate image'}
              </button>
        </div>

        <div className="mt-10">
          <p className='text-[#666e75] mt-2 text-[14px]'>Share your creatively generated images with your friends and others</p>
        </div>
        <button type='submit' className='mt-3 text-white bg-[#5272F2] rounded-lg block w-full p-3'>
          {loading? 'sharing...' : "share with others"}
        </button>
      </form>
    </section>
  )
}

export default CreatePost
