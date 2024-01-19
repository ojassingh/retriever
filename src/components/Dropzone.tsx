'use client'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import axios from 'axios'

export default function MyDropzone(setDocument: any) {
    
  const onDrop = useCallback(async (acceptedFiles: any) => {
        const file = acceptedFiles[0];
        const data = new FormData()
        data.set('file', file)

        const res = await fetch('/api/retrieval/ingest', {
            method: 'POST',
            body: data
        })

        // console.log("server response: ", res.body)
  }, [])


  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p className='p-2 bg-blue-500 text-white rounded-xl m-2'>Drop the files here ...</p> :
          <p className='p-2 bg-blue-500 text-white rounded-xl m-2'>Drag and drop your pdf here.</p>
      }
    </div>
  )
}
