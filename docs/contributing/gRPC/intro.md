---
sidebar_position: 1
---

# Introduction

Behind the GraphQL endpoints. GraphQL is querying a set of gRPC microservices which does the heavy work behind each queries. The gRPC services basically handle database querying, checking the validity of the inputs and so on...

You may wonder why choosing gRPC ? Well it's to mainly learn how works gRPC.

There are currently 2 gRPC services behind the GraphQL.

|   Name   |                           Usage                                  |
| -------- |:----------------------------------------------------------------:|
| Hospital | Expose services related to hospital .e.g: cases, level in icu... |
| PCR      | Expose services related to PCR .e.g, positive pcr and so on..    |

These gRPC services are not exposed. Hence you may only communicate with them throughout the usage of GraphQL.

## Hospital microservice

The hospital microservice is used to expose these datasets:

- [Hospital cases by age & by region](https://www.data.gouv.fr/fr/datasets/r/08c18e08-6780-452d-9b8c-ae244ad529b3)
- [Hospital new cases](https://www.data.gouv.fr/fr/datasets/r/6fadff46-9efd-4c53-942a-54aca783c30c)
- [Mix data between SI-VIC, SI-DEP & VAC-SI](https://raw.githubusercontent.com/etalab/data-covid19-dashboard-widgets/master/files_new/vacsi_non_vacsi_nat.csv)
- [Entry in ICU for unvaccinated people](https://raw.githubusercontent.com/etalab/data-covid19-dashboard-widgets/master/dist/sc_non_vacsi.json)
- [Entry in ICU for vaccinated people](https://raw.githubusercontent.com/etalab/data-covid19-dashboard-widgets/master/dist/sc_vacsi.json)

## PCR microservice

The pcr microservice is used to expose these datasets:

- [Positive PCR test by department](https://www.data.gouv.fr/fr/datasets/r/406c6a23-e283-4300-9484-54e78c8ae675)
- [Positive PCR test by region](https://www.data.gouv.fr/fr/datasets/r/001aca18-df6a-45c8-89e6-f82d689e6c01)
- [Positive cases by department per 100k](https://www.data.gouv.fr/fr/datasets/r/4180a181-a648-402b-92e4-f7574647afa6)
