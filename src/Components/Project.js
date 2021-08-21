import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';

const Project = () => {
    const [projects, setProjects] = useState(null);
    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "project"]{
            title,
            date,
            description,
            projectType,
            live,
            github,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
            .then((data) => setProjects(data))
            .catch(console.error)
    }, [])
    return (

        // <main className="bg-gray-100 min-h-screen p-12">
        //     <section className="container mx-auto">
        //         <h1 className="text-5xl flex justify-center">Projects</h1>
        //         <h2 className="text-lg text-gray-600 flex justify-center mb-12">
        //             Here are some of my current projects.
        //         </h2>
        //         <section className="grid grid-cols-2 gap-8">
        //             {projects &&
        //                 projects.map((project, index) => (
        //                     <article className="relative rounded-lg shadow-xl bg-white p-16">
        //                         <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
        //                             <a
        //                                 href={project.link}
        //                                 alt={project.title}
        //                                 target="_blank"
        //                                 rel="noopener noreferrer"
        //                             >
        //                                 {project.title}
        //                             </a>
        //                         </h3>
        //                         <div className="text-gray-500 text-xs space-x-4">
        //                             <span>
        //                                 <strong className="font-bold">Finished on</strong>:{" "}
        //                                 {new Date(project.date).toLocaleDateString()}
        //                             </span>
        //                             <span>
        //                                 <strong className="font-bold">Company</strong>:{" "}
        //                                 {project.place}
        //                             </span>
        //                             <span>
        //                                 <strong className="font-bold">Type</strong>:{" "}
        //                                 {project.projectType}
        //                             </span>
        //                             <p className="my-6 text-lg text-gray-700 leading-relaxed">
        //                                 {project.description}
        //                             </p>
        //                             <a
        //                                 href={project.link}
        //                                 rel="noopener noreferrer"
        //                                 target="_blank"
        //                                 className="text-gray-500 font-bold hover:underline hover:text-gray-400 text-xl"
        //                             >
        //                                 View the Project{" "}
        //                                 <span role="img" aria-label="right pointer">
        //                                     👉
        //                                 </span>
        //                             </a>
        //                             <a
        //                                 href={project.git}
        //                                 rel="noopener noreferrer"
        //                                 target="_blank"
        //                                 className="text-gray-500 font-bold hover:underline hover:text-gray-400 text-xl"
        //                             >
        //                                 View the Code{" "}
        //                                 <span role="img" aria-label="right pointer">
        //                                     👉
        //                                 </span>
        //                             </a>
        //                         </div>
        //                     </article>
        //                 ))}
        //         </section>
        //     </section>
        // </main>
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12 mt-6 headline">Welcome to my projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects && projects.map((project, index) => (
                        <article key={index} className="border-l-8 border-b-8 border-green-400 rounded bg-white shadow ">
                            <span key={index}>
                                {/* <img src={project.mainImage.asset.url} alt={project.mainImage.alt} className="w-full h-full rounded object-cover" /> */}
                                <img src={project.mainImage.asset.url} alt={project.mainImage.alt} className="  rounded object-cover w-full h-72"/>
                                <span>
                                    <h3 className="text-gray-800 text-lg font-bold px-3 pt-4 rounded text-center">{project.title}</h3>
                                    <p className="text-gray-800 text-lg font-bold px-3 py-4 bg-opacity-75 rounded text-center">{project.description}</p>

                                    <div className=" flex justify-center items-end mb-5">
                                        {project.live && <a href={project.live} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400 ml-4 px-4 py-1 bg-green-400 rounded">Live</a>}
                                        {project.github && <a href={project.github} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400 ml-4 px-4 py-1 bg-green-400 rounded">Github</a>}
                                    </div>
                                </span>
                            </span>
                        </article>
                    ))
                    }
                </div>
            </section>
        </main>
    );
};

export default Project;