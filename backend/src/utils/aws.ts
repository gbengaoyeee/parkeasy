import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.VITE_AWS_SECRET_ACCESS_KEY
});

export const BUCKET_NAME = process.env.VITE_AWS_S3_BUCKET;
const s3 = new AWS.S3({
    params: {
        Bucket: BUCKET_NAME,
    }
});

export default s3