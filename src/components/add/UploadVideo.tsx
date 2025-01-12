
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    cloudinary: any;
  }
}

interface CloudinaryUploaderProps {
  cloudName: string;
  uploadPreset: string;
}

const CloudinaryUploader= ({

  setUrl,
  videoUrl,
}: { videoUrl:any,setUrl:any})  => {
  const cloudName= 'dweqbyja4'
  const uploadPreset= 'igvrbep7'
  const [uploaded,setUploaded] = useState(false)
  useEffect(() => {
    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName,
        uploadPreset,
        resourceType: "video"
        , apiKey:557193415787113,
      },
      (error: any, result: any) => {
        console.log('error: ', error);
        if (!error && result && result.event === 'success') {
          console.log('Done! Here is the image info: ', result.info);
          const url = result.info?.url
          const  resource_type= result.info?.resource_type
          if (url && resource_type === 'video') {
            console.log('url:,true ', url);
              setUrl(url)
             setUploaded(true)
          }
        }
      }
    );

    const handleClick = () => {
      myWidget.open();
    };

    document.getElementById('upload_widget')?.addEventListener('click', handleClick);

    return () => {
      document.getElementById('upload_widget')?.removeEventListener('click', handleClick);
    };

  }, [cloudName, uploadPreset]);

  return (

    <>
       {videoUrl ? `Test Link: ${videoUrl}` : null}


        <Button
      disabled={uploaded || videoUrl} id='upload_widget'
        type='submit'
        form='add-form'
        color="primary"
          variant="contained"
        >
           Add Video
        </Button>
        {
          videoUrl &&
          <Button
          disabled={!uploaded}
            onClick={()=>{setUrl('');setUploaded(false)}}
            type='submit'
            form='add-form'
            color="error"
              variant="contained"
            >
               Delete Video
            </Button>
        }

        </>



  );
};

export default CloudinaryUploader;
