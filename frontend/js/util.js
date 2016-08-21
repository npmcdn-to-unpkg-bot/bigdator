import settings from './settings'
import fetch from 'isomorphic-fetch'


export const getData = function(opts) {
  let {
    date,
    start,
    end,
    name,
    agg,
  } = opts

  let url = settings.serverUrl + '/buurten/?';
  if(typeof date !== 'undefined'){
    url +=
  }
  if(typeof name !== 'undefined'){

  }
  if(typeof agg !== 'undefined'){

  }
    // (opts.date ? "date="+opts.date
    // : "start="+opts.start+"&end="+opts.end)
    // + (opts.name?"&name="+opts.name:'')
    // + (opts.agg?"&agg="+opts.agg:'')

}