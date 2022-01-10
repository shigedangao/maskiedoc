---
sidebar_position: 2
---

# Hosting

The service is hosted on [Google Cloud Platform](https://cloud.google.com/). In GKE we're using these services:

- GKE autopilot
- Artifact repository
- Cloud SQL
- Bucket
- Global IP address
- Cloud KMS

## Kubernetes

Every services are run in the Kubernetes cluster. These deployments are deployed in a GitOps way with the usage of [ArgoCD](https://argo-cd.readthedocs.io/en/stable/). The deployment is triggerred by the CI/CD.

Secrets are handled through a mix usage of [sealed-secrets](https://github.com/bitnami-labs/sealed-secrets) & [sops](https://github.com/mozilla/sops)

## Sum-up

Below is a sum-up in a diagram format.

![architecture image](/img/diagram_architecture.png)
