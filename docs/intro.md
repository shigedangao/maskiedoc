---
sidebar_position: 1
---

# Introduction

Maskie is a GraphQL endpoint which exposes some data about the Covid19 pandemic in France. Data comes from:

- [Data gouv](https://data.gouv.fr/)
- [Dashboard covid19 repo](https://github.com/etalab/data-covid19-dashboard-widgets)

## Datasets available

Below is the list of dataset which is available throught GraphQL. The data are updated **every 24h.**

| Dataset                                                         | Source           |
| --------------------------------------------------------------- |:-------------:|
| Hospital cases by age & by region                               | [Link](https://www.data.gouv.fr/fr/datasets/r/08c18e08-6780-452d-9b8c-ae244ad529b3) |
| Hospital new cases                                              | [Link](https://www.data.gouv.fr/fr/datasets/r/6fadff46-9efd-4c53-942a-54aca783c30c) |
| Positive PCR test by department                                 | [Link](https://www.data.gouv.fr/fr/datasets/r/406c6a23-e283-4300-9484-54e78c8ae675) |
| Positive PCR test by region                                     | [Link](https://www.data.gouv.fr/fr/datasets/r/001aca18-df6a-45c8-89e6-f82d689e6c01) |
| Positive cases by department per 100k                           | [Link](https://www.data.gouv.fr/fr/datasets/r/4180a181-a648-402b-92e4-f7574647afa6) |
| Mix data between SI-VIC, SI-DEP & VAC-SI (basically DREES data) | [Link](https://raw.githubusercontent.com/etalab/data-covid19-dashboard-widgets/master/files_new/vacsi_non_vacsi_nat.csv) |
| Entry in ICU for unvaccinated people                            | [Link](https://raw.githubusercontent.com/etalab/data-covid19-dashboard-widgets/master/dist/sc_non_vacsi.json) | 
| Entry in ICU for vaccinated people                              | [Link](https://raw.githubusercontent.com/etalab/data-covid19-dashboard-widgets/master/dist/sc_vacsi.json) |


:::caution

Some dataset may not be updated regularly. This can be the case for the **DREES** dataset 

:::

## Prototyping

You may use the [preprod endpoint](https://preprod.covid19data.fr/graphql) to check the list of queries available. No authentication is required. Below is an example of query:

```graphql
query GetGlobalCovidDataByDate($data: GraphPositivityInput!) {
  getPositivityByDepartmentPerDay(data: $data) {
    department
    day
    populationReference
    pcrPositive
    infectionRate
  }
}
```

Below is the argument which need to be provides
```json
{
  "data": {
    "day": 30,
    "month": 12,
    "year": 2021,
    "department": "95"
  }
}
```

## Usage in production

You may use the endpoint [https://covid19data.fr/graphql](https://covid19data.fr/graphql) in production environment. No authentication is required
