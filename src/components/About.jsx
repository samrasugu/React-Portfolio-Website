import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-200 bg-gradient-to-b from-gray-800 to-black text-white pb-20'>
        

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-3'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-5'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, illum corrupti aliquam animi tenetur nesciunt velit provident sequi iusto labore. Ipsa incidunt modi nemo temporibus autem atque fuga tenetur eum?
            </p>

            <br/>

            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam quasi architecto voluptates harum magni voluptatum quia vero ipsum iure corrupti odio pariatur, cum assumenda dolorem hic doloribus soluta ducimus animi id? Esse, dolore dolorum quod vero reiciendis magnam saepe laboriosam minus dolorem quibusdam placeat? Placeat facere distinctio aspernatur laborum nemo?</p>
        </div>
    </div>
  )
}

export default About