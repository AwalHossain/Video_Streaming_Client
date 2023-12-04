import axios from "axios";
import EventEmitter from "events";
import _ from 'lodash';
import { useState } from "react";
import REACT_APP_API_URL from "../../utils/apiUrl";

export const progressEmitter = new EventEmitter();

export const useUpload = () => {
    const [uploading, setUploading] = useState(false);
    const [data, setData] = useState(null);

    const upload = async (values) => {
        const formData = new FormData();
        formData.append('video', values.video);
        if (values.image) {
            formData.append('image', values.image);
        }

        const throttledEmitProgress = _.throttle((progress) => {
            progressEmitter.emit('progress', progress);
        }, 5000);

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: (progressEvent) => {
                setUploading(true);

                const { loaded, total } = progressEvent;
                const percent = Math.floor((loaded * 100) / total);

                throttledEmitProgress({
                    status: 'processing',
                    name: "Video Upload",
                    fileName: values.video.name,
                    progress: percent,
                });
            }
        };

        try {
            const response = await axios.post(`${REACT_APP_API_URL}/videos/upload`, formData, config);
            setData(response.data);
            setUploading(false);
            throttledEmitProgress({
                status: 'completed',
                name: "Video Upload",
                fileName: values.video.name,
                progress: 100,
            });
            return response.data;
        } catch (error) {
            throttledEmitProgress({
                status: 'completed',
                name: "Video Upload",
                fileName: values.video.name,
                progress: 100,
            });
            console.error(error, 'chekcing axio');
        }
    }

    return { upload, uploading, data };
};