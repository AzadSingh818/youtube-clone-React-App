/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({data}) {
  return (
    <div className='w-64 h-60 flex gap-3 flex-col'>
      <div className='relative'>
            <span className='absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10'>
                {data.videoDuration}
            </span>
            <Link to = {`/watch/${data.videoId}`}>
            <img src={data.videoThumbnail} alt='Thumbnail'className='h-44 w-72'/>
            </Link>
        </div>
        <div className='flex gap-2'>
            <div className='min-w-fit'>
                <Link to={`/channel/${data.channelInfo.id}`}><img src={data.channelInfo.image} alt="channel image" className='h-9 w-9 rounded-full'/>
                </Link>
            </div>
            <div>
                <h3>
                    <a href='#' className='line-clamp-2'>
                        {data.videoTitle} 
                    </a>
                </h3>
                <div className='text-sm text-gray-400'>
                    <div>
                        <a href='#' className='hover:text-white'>
                            {data.channelInfo.name}
                        </a>
                    </div>
                    <div>
                        <span className="after:content-['•'] after:mx-1">
                            {data.videoViews} views
                        </span>
                        <span>
                            {data.videoAge}
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}
