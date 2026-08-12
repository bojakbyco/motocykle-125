import json
from pathlib import Path
ROOT=Path('/root/motocykle-125/src/content/motorcycles'); DATE='2026-08-12'
def price(amount,regular=None):
 d={'amount':amount,'currency':'PLN','asOf':DATE,'kind':'msrp'}
 if regular:d['regularAmount']=regular
 return d
def ed(b,p,t,g,c,h,lim): return {'beginnerFriendliness':b,'passengerComfort':p,'touringReadiness':t,'gravelReadiness':g,'cityAgility':c,'tallRiderFit':h,'partsAvailability':4,'limitations':[lim]}
def model(slug,name,year,category,use,price_data,engine,dimensions,chassis,equipment,editorial,sources,summary):
 d={'id':slug,'slug':slug,'brand':'Barton','model':name,'status':'current-pl','category':category,'useCases':use,'price':price_data,'engine':engine,'dimensions':dimensions,'chassis':chassis,'equipment':equipment,'editorial':editorial,'sourceUrls':sources,'verifiedAt':DATE,'summary':summary}
 if year:d['marketYear']=year
 return d
rows=[
model('barton-duelx-125','DuelX 125',2026,'adventure',['commute','weekend','touring','gravel'],price(13899),{'capacityCc':124.2,'cooling':'liquid','gearbox':6},{'weightKg':153,'weightDefinition':'waga — definicja niepodana','tankL':11},{'abs':'dual','absNote':'ABS potwierdzony przy przednim i tylnym hamulcu; producent nie podaje liczby kanałów','frontWheelIn':19,'rearWheelIn':17,'wheelType':'cast'},{},ed(3,3,4,3,3,4,'Producent nie publikuje wysokości siedzenia ani mocy w kW.'),['https://barton-motors.pl/modele/motocykle-125/barton-duelx','https://barton-motors.pl/marka-barton/aktualnosci/barton-duelx-125-nowy-motocykl-adv-na-kat-b'],'Nowe adventure 125 z sześciobiegową skrzynią, kołami 19/17 i ABS na obu kołach.'),
model('barton-rally-125-duo','Rally 125 duo',None,'adventure',['commute','weekend','touring','gravel'],price(12900),{'capacityCc':125,'cooling':'liquid','gearbox':6},{'weightKg':146,'weightDefinition':'waga — definicja niepodana','groundClearanceMm':290,'tankL':13},{'abs':'generic','absNote':'Konflikt producenta: opis wskazuje ABS przód i tył, tabela oznacza ABS tylko przy hamulcu przednim','frontWheelIn':19,'rearWheelIn':17},{'led':True,'windscreen':True,'handguards':True},ed(3,3,4,4,3,4,'Zakres działania ABS jest niespójnie opisany na oficjalnej karcie.'),['https://barton-motors.pl/modele/motocykle-125/rally-125-duo'],'Adventure z wysokim prześwitem, LED, szybą i terenowym charakterem; nowsza wersja rodziny Rally.'),
model('barton-gt-125','GT 125',2022,'adventure',['commute','weekend','touring'],price(9999,11499),{'capacityCc':124,'cooling':'air','gearbox':5},{'weightKg':123,'weightDefinition':'waga według tabeli; opis producenta podaje konfliktowo 120 kg','seatHeightMm':770,'tankL':11},{'abs':'unverified','frontWheelIn':17,'rearWheelIn':17,'wheelType':'cast'},{'led':True,'windscreen':True},ed(4,4,4,1,4,3,'To nadal dostępny, lecz starszy sezon 2022; producent publikuje sprzeczne wartości mocy i masy.'),['https://barton-motors.pl/modele/motocykle-125/barton-gt-125'],'Budżetowy motocykl turystyczny z niskim siedzeniem, wysoką szybą i uchwytem bagażowym.')]
for d in rows:
 p=ROOT/f"{d['slug']}.md"
 if p.exists(): raise RuntimeError(f'exists: {p}')
 p.write_text('---\n'+json.dumps(d,ensure_ascii=False,separators=(',',':'))+'\n---\n'+d['summary']+' Dane zweryfikowano na oficjalnej polskiej stronie Barton.\n')
print(f'Added {len(rows)} Barton models')
