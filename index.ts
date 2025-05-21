import * as aws from "@pulumi/aws";


const bucket = new aws.s3.BucketV2("bucket-pos-rocketseat", {
    bucket: 'bucket-pos-rocketseat',
    tags: {
        IAC: "true",
    },
});

const ecr = new aws.ecr.Repository("ecr-pos-rocketseat", {
    name: 'ecr-pos-rocketseat',
    imageTagMutability: 'IMMUTABLE',
    tags: {
        IAC: "true",
    }
});


export const bucketName = bucket.id;
export const bucketRegion = bucket.region;
export const bucketArn = bucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;
