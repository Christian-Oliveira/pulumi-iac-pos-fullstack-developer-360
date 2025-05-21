import * as aws from "@pulumi/aws";


const firstBucket = new aws.s3.BucketV2("first-bucket-pos-rocketseat", {
    bucket: 'first-bucket-pos-rocketseat',
    tags: {
        IAC: "true",
    },
});

const secondBucket = new aws.s3.BucketV2("second-bucket-pos-rocketseat", {
    bucket: 'second-bucket-pos-rocketseat',
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


export const firstBucketName = firstBucket.id;
export const firstBucketRegion = firstBucket.region;
export const firstBucketArn = firstBucket.arn;

export const secondBucketName = secondBucket.id;
export const secondBucketRegion = secondBucket.region;
export const secondBucketArn = secondBucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;
