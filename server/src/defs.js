import sql from 'sql'

export const combined = sql.define({
  name: 'combined',
  columns: [
    'id', 'date', 'bu_code', 'name', 'dumps', 'fillperc', 'meldingen'
  ]
})

export const reports = sql.define({
  name: 'reports',
  columns: [
    'id', 'name', 'date', 'identification', 'description', 'x', 'y'
  ]
})

