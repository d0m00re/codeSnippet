import React, { ReactElement, useState, useEffect } from 'react'

import axios from 'axios';

interface Props {

}

function ImgUpload({ }: Props): ReactElement {

    const [imgPreview, setImgPreview] = useState<{ imgPreview: string, imgFile: any }>({ imgPreview: '', imgFile: null })

    const handlePreviewLoadImg = (e: any) => {
        let image_as_base64 = URL.createObjectURL(e.target.files[0])
        let image_as_files = e.target.files[0];

        setImgPreview({
            imgPreview: image_as_base64,
            imgFile: image_as_files,
        })
    }

    const handleSubmitFile = () => {
        let formData = new FormData();
        formData.append('file', imgPreview.imgFile);
        
        axios.post(
            `http://url:port/upload`,
            formData
        )
            .then(res => {
                console.log(`Success` + res.statusText);
            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <div>
            image upload test
            <img src={imgPreview.imgPreview} />
            <input type='file' onChange={handlePreviewLoadImg}></input>
            <label>Upload file</label>
            <button type='button' name='file' value='Submit' onClick={handleSubmitFile}>SEND</button>
        </div>
    )
}

export default ImgUpload
