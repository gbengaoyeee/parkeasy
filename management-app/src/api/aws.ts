import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY
});

export const BUCKET_NAME = import.meta.env.VITE_AWS_S3_BUCKET;
const s3 = new AWS.S3({
    params: {
        Bucket: BUCKET_NAME,
    }
});


export const ReactS3Config = {
    bucketName: BUCKET_NAME,
    // dirName: import.meta.env.VITE_AWS_S3_BUCKET_DIRECTORY,
    region: import.meta.env.VITE_AWS_REGION,
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
}

export default s3