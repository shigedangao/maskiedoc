---
sidebar_position: 3
---

# Deployment

The deployment is done thought the usage of GitOps with the usage of [ArgoCD](https://argo-cd.readthedocs.io/en/stable/). For now, the repo containing the spec of the deployments is stored on a private repository.

Secrets are handled with a mix of [SOPS](https://github.com/mozilla/sops) and [Kubeseal](https://github.com/bitnami-labs/sealed-secrets).

The docker images are stored in Google Cloud Platform.

## Staging environment

This project is configured with unit tests which ensure that we won't break existing features. When finishing your modification. Create a PR toward the `staging` branch of the repo.

## Production environment

Release is done automatically. When merging to the main branch, the production environment will be automatically updated. 
