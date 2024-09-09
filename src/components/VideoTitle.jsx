const VideoTitle = ({ title, content, className = '' }) => {
    return (
        <div className={`px-6 pt-20 pb-60 bottom-0 w-full bg-gradient-to-t from-black ${className}`}>
            <div className="mb-5 text-white">
                <h2 className="text-3xl font-bold mb-5">{title}</h2>
                <p className="max-w-sm line-clamp-2">{content}</p>
            </div>
            <div className="flex gap-4">
                <button className="bg-white px-6 py-2 flex gap-3 items-center rounded-sm font-medium"><i className="icon-play3" />Play</button>
                <button className="bg-slate-300 px-5 py-2 flex gap-3 items-center rounded-sm font-medium bg-opacity-65 text-white"><i className="icon-info" />More info</button>
            </div>
        </div>
    )
}

export default VideoTitle