# Cloud Run Landingpage Teman Disabilitas Deployment

[![Run in Google Cloud][run_img]][run_link]

[run_img]: https://storage.googleapis.com/cloudrun/button.svg
[run_link]: https://console.cloud.google.com/cloudshell/editor?shellonly=true&cloudshell_image=gcr.io/cloudrun/button&cloudshell_git_repo=https://github.com/hzlnqodrey/landingpage-temandisabilitas-cloudrun-deployment-development.git&cloudshell_working_dir=run/landingpage-tedi

## Build

```
docker build --t landingpage-tedi:node .
```

## Run Locally

```
docker run --rm -p 9090:8080 -e PORT=8080 helloworld:node
```

## Test

```
export SERVICE_NAME=helloworld
export CONTAINER_IMAGE=gcr.io/${GOOGLE_CLOUD_PROJECT}/helloworld
npm run e2e-test
```

## Deploy

```sh
# Set an environment variable with your GCP Project ID
export GOOGLE_CLOUD_PROJECT=<PROJECT_ID>

# Submit a build using Google Cloud Build
gcloud builds submit --tag gcr.io/${GOOGLE_CLOUD_PROJECT}/landingpage-tedi

# Deploy to Cloud Run
gcloud run deploy helloworld \
--image gcr.io/${GOOGLE_CLOUD_PROJECT}/landingpage-tedi
```
