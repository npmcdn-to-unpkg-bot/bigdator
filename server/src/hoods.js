
export const hoods = [
  {bu_code: 6060606, name: 'Schiehart'},
  {bu_code: 6060105, name: 'Wetenschappersbuurt'},
  {bu_code: 6060404, name: 'Maasboulevard'},
  {bu_code: 6060703, name: 'Groenoord-Midden'},
  {bu_code: 6060704, name: 'Groenoord-Noord'},
  {bu_code: 6060106, name: 'Newtonbuurt'},
  {bu_code: 6060705, name: 'Kethel-dorp'},
  {bu_code: 6060301, name: 'Schildersbuurt'},
  {bu_code: 6060202, name: 'Walvisbuurt'},
  {bu_code: 6060303, name: 'Fabribuurt'},
  {bu_code: 6060602, name: 'Spieringshoek'},
  {bu_code: 6060907, name: 'De Akkers en De Velden'},
  {bu_code: 6060401, name: 'Noletbuurt'},
  {bu_code: 6060102, name: 'Natuurkundigenbuurt'},
  {bu_code: 6060203, name: 'De Plantage'},
  {bu_code: 6060607, name: 'Nolensbuurt'},
  {bu_code: 6060608, name: 'Wibautbuurt'},
  {bu_code: 6060403, name: 'Piet Sandersbuurt'},
  {bu_code: 6060702, name: 'Groenoord-Zuid'},
  {bu_code: 6060201, name: 'Brandersbuurt'},
  {bu_code: 6060101, name: 'Stadserf'},
  {bu_code: 6060906, name: 'De Vlinderhoven/Sveaholm'},
  {bu_code: 6060402, name: 'Eilandenbuurt'},
  {bu_code: 6060104, name: 'Stationsbuurt'},
  {bu_code: 6060306, name: 'Nassaubuurt'},
  {bu_code: 6060308, name: 'Haverschmidtkwartier'},
  {bu_code: 6060304, name: 'Frankenland'},
  {bu_code: 6060302, name: 'Schrijversbuurt'},
  {bu_code: 6060309, name: 'Distillateursbuurt'},
  {bu_code: 6060905, name: 'De Gaarden/Sveafors'},
  {bu_code: 6060902, name: 'Ambachtenbuurt'},
  {bu_code: 6060901, name: 'Toneelspelersbuurt'},
  {bu_code: 6060103, name: 'Singelkwartier'},
  {bu_code: 6060908, name: 'Sveaborg en -Dal'},
  {bu_code: 6060603, name: 'Staatsliedenbuurt'},
  {bu_code: 6060904, name: 'Botenbuurt'},
  {bu_code: 6060305, name: 'Liduinabuurt'},
  {bu_code: 6060000, name: 'Buurt 00'},
  {bu_code: 6060307, name: 'Oranjekwartier'},
  {bu_code: 6060903, name: 'Kastelenbuurt'},
  {bu_code: 6060107, name: 'Rotterdamsedijk'}
]

export const hoodsArray = [
  'Schiehart',
  'Wetenschappersbuurt',
  'Maasboulevard',
  'Groenoord-Midden',
  'Groenoord-Noord',
  'Newtonbuurt',
  'Kethel-dorp',
  'Schildersbuurt',
  'Walvisbuurt',
  'Fabribuurt',
  'Spieringshoek',
  'De Akkers en De Velden',
  'Noletbuurt',
  'Natuurkundigenbuurt',
  'De Plantage',
  'Nolensbuurt',
  'Wibautbuurt',
  'Piet Sandersbuurt',
  'Groenoord-Zuid',
  'Brandersbuurt',
  'Stadserf',
  'De Vlinderhoven/Sveaholm',
  'Eilandenbuurt',
  'Stationsbuurt',
  'Nassaubuurt',
  'Haverschmidtkwartier',
  'Frankenland',
  'Schrijversbuurt',
  'Distillateursbuurt',
  'De Gaarden/Sveafors',
  'Ambachtenbuurt',
  'Toneelspelersbuurt',
  'Singelkwartier',
  'Sveaborg en -Dal',
  'Staatsliedenbuurt',
  'Botenbuurt',
  'Liduinabuurt',
  'Buurt 00',
  'Oranjekwartier',
  'Kastelenbuurt',
  'Rotterdamsedijk'
]


export function getHoodCode(name){
  for(let hood of hoods){
    if(hood.name === name){
      return hood.bu_code
    }
  }
  return -1
}

