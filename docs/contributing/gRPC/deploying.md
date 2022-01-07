---
sidebar_position: 4
---

# Deployment

The deployment is done throught the usage of GitOps with the usage of [ArgoCD](https://argo-cd.readthedocs.io/en/stable/). For now, the repo containing the spec of the deployment are stored on a private repository.

Secrets are handled with a mix of [SOPS](https://github.com/mozilla/sops) and [Kubeseal](https://github.com/bitnami-labs/sealed-secrets).

The docker image are stored in Google Cloud Platform.

## Staging environment

This project is configured with unit test which ensure that we won't break existing feature. To deploy this project, create a PR toward the `staging` branch of the repo.

This will run unit test and ensure that everything is good. Once your pr is merge. The code will be deployed to the staging environment which refer to the URL of: `preprod.covid19data.fr`.

## Production environment

Release is done automatically. When merging to the main branch, the production environment will be automatically updated. 
