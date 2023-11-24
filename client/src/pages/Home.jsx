import React, { useState } from 'react';
import { Card, Loader, FormField } from '../components';

const RenderCards = ({data, title}) => {
        if(data?.length > 0){
            return data.map((post)=><Card key={post._id} {...post}/>)
        }

        return (
            <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">
                {title}
            </h2>
        )
}

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [allPosts, setAllPosts] = useState(null)
    const [searchText, setSearchText] = useState('')

    return (
        <section className='max-w-7xl mx-auto'>
            <div>
                <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600'>See what other people created</h1>
                <p className='mt-2 text-[#666e75] text-[18px] max-w[500px]'>
                    Take your imagination to new journey
                </p>
            </div>

            <div className="mt-16">
                <FormField />
            </div>

            <div className="mt-10">
                {loading ? (
                    <div className="flex justify-center item-center">
                        <Loader />
                    </div>
                ) : (
                    <>
                        {searchText && (
                            <h2 className='font-medium text-[#666e75] text-xl mb-3'>
                                Showing results for <span className='text-[#666e75]'>{searchText}</span>
                            </h2>
                        )}

                        <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                            {searchText? (<RenderCards data={[]}  title="No search results found"/>)
                            :
                            (<RenderCards data={[]} title="No posts found"/>)}
                        </div>
                    </>)}
            </div>


        </section>
    )
}

export default Home
