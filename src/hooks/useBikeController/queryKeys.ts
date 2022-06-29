const queryKeys = {
  companies: [{ scope: 'companies' }] as const,
  models: [{ scope: 'models' }] as const,
}

export default queryKeys
// export default {
//   companiesQueryKey: queryKeys.companies,
//   modelsQueryKey: queryKeys.models,
// }
