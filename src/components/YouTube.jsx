import React from 'react';

const YouTube = ({ videoId }) => {
    if (!videoId) {
        return <div>Please provide a YouTube video ID.</div>;
    }

    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${videoId}`;

    return (
        <div className="w-screen relative">
            <iframe
                className="w-full h-full aspect-video"
                src={embedUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video"
            ></iframe>
            <div className='overlay absolute w-full h-full bg-transparent top-0'></div>
        </div>
    );
};

export default YouTube;