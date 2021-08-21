import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
const builder = imageUrlBuilder(sanityClient);
const BlockContent = require('@sanity/block-content-to-react')
function urlFor(source) {
    return builder.image(source)
}

const SinglePost = () => {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();
    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name":author->name,
            "authorImage":author->image
        }`)
            .then((data) => setSinglePost(data[0]))
        .catch(console.error)
    }, [slug])
    if(!singlePost) return <div>Loading...</div>
    return (
        <main className="bg-gray-200 min-h-screen p-12">
            <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
                <header className="relative">
                    <div className="h-full w-full absolute flex items-center justify-center p-8">
                        <div className="bg-white bg-opacity-75 rounded p-12">
                            <h1 className="cursive text-4xl lg:text-6xl mb-4">{ singlePost.title}</h1>
                            <div className="flex justify-center text-gray-800">
                                <img src={urlFor(singlePost.authorImage).url()} alt={ singlePost.name} className="w-10 h-10 rounded-full"/>
                                <p className="flex items-center cursive pl-2 text-2xl">{ singlePost.name}</p>
                            </div>
                        </div>
                    </div>
                    <img src={singlePost.mainImage.asset.url} alt={singlePost.mainImage.alt} className="w-full h-full rounded object-cover" style={{height:"500px"}} />
                </header>
                <div className="px5 lg:px-20 py-12 lg:py-20 max-x-full">
                    <BlockContent
                        blocks={singlePost.body}
                        projectId= "6i9v66f6"
                        dataset="production"
                    />
                </div>
            </article>
        </main>
    );
};

export default SinglePost;