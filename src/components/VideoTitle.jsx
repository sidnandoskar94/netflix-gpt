const VideoTitle = ({ title, content, className = '' }) => {
    return (
        <div className={`px-6 pt-20 pb-72 bottom-0 w-full bg-gradient-to-t from-black ${className}`}>
            <div className="mb-5 text-white">
                <h2 className="text-6xl font-bold mb-5 ine-clamp-1" title={title}>{title}</h2>
                <p className="text-lg max-w-md line-clamp-2 mb-5">{content}</p>
            </div>
            <div className="flex gap-5">
                <button className="bg-white px-6 py-2 flex gap-3 items-center rounded-md font-medium text-xl"><i className="icon-play3" />Play</button>
                <button className="bg-slate-300 px-5 py-2 flex gap-3 items-center rounded-md font-medium bg-opacity-65 text-white text-xl"><i className="icon-info" />More info</button>
            </div>
        </div>
    )
}

export default VideoTitle