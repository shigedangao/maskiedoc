---
sidebar_position: 1
---

# Getting started

Maskie is a GraphQL endpoint which exposes some data about the Covid19 pandemic in France. Data are provided from:

- [Data gouv](https://data.gouv.fr/)
- [Dashboard covid19 repo](https://github.com/etalab/data-covid19-dashboard-widgets)

## Datasets exposed by Maskie

The source above provided a hundred of datasets. Below are some of the dataset that you can query using this GraphQL API. If you wish to see Maskie supporting more dataset. You may open an [issue](https://github.com/shigedangao/graphie) on GitHub.


| Dataset                                                         | Source                                                                              | French name                                                  |
| --------------------------------------------------------------- |:-----------------------------------------------------------------------------------:|:------------------------------------------------------------:|
| Hospital cases by age & by region                               | [Link](https://www.data.gouv.fr/fr/datasets/r/08c18e08-6780-452d-9b8c-ae244ad529b3) | donnees-hospitalieres-classe-age-covid19                     |
| Hospital new cases                                              | [Link](https://www.data.gouv.fr/fr/datasets/r/6fadff46-9efd-4c53-942a-54aca783c30c) | donnees-hospitalieres-nouveaux-covid19                       |
| Positive PCR test by department                                 | [Link](https://www.data.gouv.fr/fr/datasets/r/406c6a23-e283-4300-9484-54e78c8ae675) | sp-pos-quot-dep                                              |
| Positive PCR test by region                                     | [Link](https://www.data.gouv.fr/fr/datasets/r/001aca18-df6a-45c8-89e6-f82d689e6c01) | sp-pos-quot-reg                                              |
| Positive cases in the whole country                             | [Link](https://www.data.gouv.fr/fr/datasets/r/dd0de5d9-b5a5-4503-930a-7b08dc0adc7c) | sp-pos-quot-fra                                              |
| Mix data between SI-VIC, SI-DEP & VAC-SI (basically DREES data) | [Link](https://raw.githubusercontent.com/etalab/data-covid19-dashboard-widgets/master/files_new/vacsi_non_vacsi_nat.csv) | vacsi_non_vacsi_nat.csv |
| Entry in ICU for unvaccinated people                            | [Link](https://raw.githubusercontent.com/etalab/data-covid19-dashboard-widgets/master/dist/sc_non_vacsi.json) |            sc_non_vacsi.json       |
| Entry in ICU for vaccinated people                              | [Link](https://raw.githubusercontent.com/etalab/data-covid19-dashboard-widgets/master/dist/sc_vacsi.json) |    sc_vacsi.json                       |
| Hospital data per department                                    | [Link](https://www.data.gouv.fr/fr/datasets/r/63352e38-d353-4b54-bfd1-f1b3ee1cabd7) | donnees-hospitalieres-covid19                                |
| Incidences cases per department for 100k daily                  | [Link](https://www.data.gouv.fr/fr/datasets/r/4180a181-a648-402b-92e4-f7574647afa6) | sp-pe-std-quot-dep                                           |

:::caution

Some datasets may not be updated everyday .e.g: DREES data

:::

## Prototyping

You may use the [preprod endpoint](https://preprod.covid19data.fr/graphql) to see the list of available queries. These endpoints do not requir any authentication. Below is an example of query:

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

:::caution

Department is a string as the csv contain some number which can't be parsed.

:::

## Usage in production

If you want to use this endpoint for your production environment. You may then use this endpoint [https://covid19data.fr/graphql](https://covid19data.fr/graphql) in production environment. Like the prototyping environment. No authentication is required
