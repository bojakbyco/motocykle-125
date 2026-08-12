import json
from pathlib import Path

ROOT = Path('/root/motocykle-125/src/content/motorcycles')
AS_OF = '2026-08-12'

def price(amount, kind='msrp', regular=None, note=None):
    out={'amount':amount,'currency':'PLN','asOf':AS_OF,'kind':kind}
    if regular is not None: out['regularAmount']=regular
    if note: out['note']=note
    return out

U = {
'aprilia-rs-125': dict(price=price(23900), engine={'capacityCc':124.2}, dimensions={'wetWeightKg':144,'seatHeightMm':820,'tankL':14.5}, chassis={'abs':'dual','absNote':'Dwukanałowy ABS z systemem anti-roll-over'}, sourceUrls=['https://www.aprilia.com/pl_PL/models/rs-125/rs-125-125-4s4v-2025/','https://wlassets.aprilia.com/wlassets/aprilia/master/tech_spec/RS-125/RS_125_tech_spec_EN/original/RS_125_tech_spec_EN.pdf?1747315624901']),
'aprilia-rx-125': dict(price=price(19500), engine={'capacityCc':124.2}, dimensions={'wetWeightKg':136,'seatHeightMm':905,'tankL':7}, chassis={'abs':'front'}, sourceUrls=['https://www.aprilia.com/pl_PL/models/rx-125/rx-125-125-4s4v-2025/','https://wlassets.aprilia.com/wlassets/aprilia/master/tech_spec/RX-SX/RX_125_tech_spec_EN/original/RX_125_tech_spec_EN.pdf?1743177019932']),
'aprilia-sr-gt-125': dict(price=price(16900), engine={'gearbox':None,'transmission':'cvt'}, dimensions={'seatHeightMm':799,'tankL':9}, chassis={'abs':'front','wheelType':None}, equipment={'usb':True}),
'benelli-bkx-125': dict(price=price(15490,'from'), dimensions={'seatHeightMm':860,'tankL':12}, chassis={'abs':'generic','absNote':'Oficjalna karta potwierdza ABS bez liczby kanałów'}, equipment={'usb':None,'windscreen':None}),
'benelli-leoncino-125': dict(marketYear=None,price=price(14990,'from'),dimensions={'dryWeightKg':137,'seatHeightMm':800,'tankL':12.5},chassis={'abs':'unverified'},sourceUrls=['https://www.benelli.com/pl-pl/products/leoncino-125-2']),
'honda-cb125r': dict(marketYear=2026,productionYear=2026,price=price(21800),engine={'capacityCc':124.9},dimensions={'wetWeightKg':None,'weightKg':130,'weightDefinition':'masa własna pojazdu','seatHeightMm':816,'tankL':10.1},chassis={'abs':'dual','absNote':'Dwukanałowy ABS zarządzany przez IMU'}),
'honda-forza-125': dict(marketYear=2026,productionYear=2026,price=price(23900),engine={'gearbox':None,'transmission':'cvt'},dimensions={'wetWeightKg':None,'weightKg':164,'weightDefinition':'masa własna pojazdu','seatHeightMm':780,'tankL':11.7},chassis={'abs':'generic','absNote':'Oficjalna karta nie określa liczby kanałów'}),
'honda-pcx125': dict(productionYear=2026,price=price(13900,note='Model 2025, produkcja 2026; wyprzedaż produkcji 2025 była oferowana za 12 900 PLN'),engine={'gearbox':None,'transmission':'cvt'},dimensions={'wetWeightKg':None,'weightKg':133,'weightDefinition':'masa własna pojazdu','seatHeightMm':763,'tankL':8.1},chassis={'abs':'generic','absNote':'Oficjalna karta nie określa liczby kanałów'},equipment={'windscreen':None}),
'junak-m12-vintage': dict(price=price(11999,'promotional',12499,'Promocja dla rocznika 2025'),engine={'powerKw':9,'gearbox':None},dimensions={'weightKg':144,'weightDefinition':'masa własna','seatHeightMm':720,'tankL':15},chassis={'abs':'dual','frontWheelIn':18,'rearWheelIn':15,'wheelType':'spoked'},equipment={'led':None}),
'junak-rx-125': dict(marketYear=None,price=price(10999),engine={'capacityCc':125,'powerKw':9.3,'cooling':'air','gearbox':None},dimensions={'weightKg':141,'weightDefinition':'masa własna','seatHeightMm':830},chassis={'abs':'front'}),
'junak-rx-one-125': dict(marketYear=None,price=price(13999),engine={'capacityCc':124,'gearbox':None},dimensions={'weightKg':164,'weightDefinition':'masa z płynami','seatHeightMm':780},chassis={'abs':'dual','wheelType':None},equipment={'led':None,'usb':None,'windscreen':None,'handguards':None}),
'ktm-125-duke': dict(marketYear=2026,price=price(21440,'promotional',23990),engine={'capacityCc':124.99,'powerKw':None},dimensions={'weightKg':154,'weightDefinition':'w pełni zatankowany','seatHeightMm':800},chassis={'abs':'cornering','absNote':'Cornering ABS z trybem Supermoto','frontWheelIn':None,'rearWheelIn':None,'wheelType':None},sourceUrls=['https://www.ktm.com/en-pl/models/naked-bike/2026-ktm-125-duke.html','https://www.ktm.com/en-pl/models/naked-bike/2026-ktm-125-duke/technical-specifications.html']),
'ktm-125-enduro-r': dict(price=price(22240,'promotional',24790),engine={'capacityCc':124.99,'powerKw':None},dimensions={'weightWithoutFuelKg':152,'weightFullyFueledKg':158,'seatHeightMm':890},chassis={'abs':'switchable','absNote':'Standard ABS, tryb Offroad ABS i możliwość wyłączenia'}),
'ktm-rc-125': dict(status='current-pl',marketYear=2024,price=price(27319),engine={'capacityCc':124.7,'powerKw':None},dimensions={'weightKg':147,'weightDefinition':'bez paliwa','seatHeightMm':824},chassis={'abs':'switchable','absNote':'ABS z trybem Supermoto','frontWheelIn':None,'rearWheelIn':None},sourceUrls=['https://www.ktm.com/en-pl/models/supersport/2024-ktm-rc-125.html','https://www.ktm.com/en-pl/models/supersport/2024-ktm-rc-125/technical-specifications.html']),
'morbidelli-t125x': dict(status='current-pl',marketYear=None,price=price(12990,'from'),engine={'capacityCc':124,'powerKw':None,'cooling':None,'gearbox':None},dimensions={'weightKg':148,'weightDefinition':'konflikt źródeł producenta: polska karta „masa sucha”, globalna „curb weight”'},chassis={'abs':'generic','wheelType':None},equipment={'windscreen':None,'handguards':None},sourceUrls=['https://www.morbidelli.com/pl-pl/products/t125x','https://www.morbidelli.com/int-en/products/t125x']),
'qjmotor-srt-125-dx': dict(status='current-pl',marketYear=None,model='SRT 125DX',price=price(12990),dimensions={'weightKg':129,'weightDefinition':'masa gotowa do jazdy','seatHeightMm':860},chassis={'abs':'dual','frontWheelIn':21,'rearWheelIn':18},equipment={'handguards':None},sourceUrls=['https://qjmotor.pl/srt125dx/']),
'qjmotor-srv-125': dict(status='current-pl',price=price(10900,note='Wyprzedaż MY2025 zależna od koloru: 10 500 lub 9 990 PLN'),engine={'powerKw':11},dimensions={'weightKg':150,'weightDefinition':'waga — definicja niepodana','seatHeightMm':720},chassis={'frontWheelIn':17,'wheelType':None},equipment={'usb':True},sourceUrls=['https://qjmotor.pl/srv-125/']),
'rieju-aventura-125': dict(status='current-pl',marketYear=None,engine={'powerKw':None},dimensions={'dryWeightKg':138,'seatHeightMm':780},chassis={'frontWheelIn':18,'rearWheelIn':17,'wheelType':None},equipment={'usb':None,'windscreen':None,'handguards':None},sourceUrls=['https://rieju.com/pl/travel/101/2024/aventura-125','https://rieju.com/pl/travel']),
'suzuki-gsx-r125': dict(marketYear=2026,price=price(17900),engine={'capacityCc':124.4},dimensions={'wetWeightKg':None,'weightKg':134,'weightDefinition':'masa własna','seatHeightMm':785,'tankL':11},chassis={'abs':'generic','absNote':'Oficjalna karta potwierdza ABS bez liczby kanałów'},sourceUrls=['https://suzuki.pl/lpmoto/gsxr125']),
'vespa-gts-125': dict(marketYear=2024,price=price(28500),engine={'gearbox':None,'transmission':'cvt'},dimensions={'seatHeightMm':790,'tankL':7}),
'yamaha-mt-125': dict(marketYear=2026,price=price(23000,'promotional',24300),dimensions={'weightKg':142,'weightDefinition':'masa z obciążeniem, wliczając wypełnione zbiorniki oleju i paliwa','seatHeightMm':810,'tankL':10},chassis={'abs':'generic','absNote':'Oficjalna karta potwierdza ABS bez liczby kanałów'}),
'yamaha-nmax-125': dict(marketYear=2026,price=price(14499,'promotional',15499),engine={'gearbox':None,'transmission':'automatic-belt'},dimensions={'weightKg':132,'weightDefinition':'waga w stanie gotowym do jazdy','seatHeightMm':770,'tankL':7.1},chassis={'abs':'dual','tractionControl':None}),
'yamaha-r125': dict(marketYear=2026,price=price(25600),dimensions={'weightKg':141,'weightDefinition':'masa z obciążeniem, wliczając wypełnione zbiorniki oleju i paliwa','seatHeightMm':820,'tankL':11},chassis={'abs':'generic','absNote':'Oficjalna karta potwierdza ABS bez liczby kanałów'}),
'yamaha-wr125r': dict(price=price(19999),dimensions={'weightKg':138,'weightDefinition':'masa z obciążeniem, wliczając wypełnione zbiorniki oleju i paliwa','seatHeightMm':875,'tankL':8.1},chassis={'abs':'front'}),
'yamaha-xmax-125': dict(marketYear=2026,price=price(22500,'promotional',23500),engine={'gearbox':None,'transmission':'automatic-belt'},dimensions={'weightKg':167,'weightDefinition':'waga w stanie gotowym do jazdy','seatHeightMm':800,'tankL':13.2},chassis={'abs':'generic','absNote':'Oficjalna karta potwierdza ABS bez liczby kanałów'}),
'zontes-zt125-c': dict(status='verify',marketYear=None,engine={'capacityCc':124.7},dimensions={'weightKg':153,'weightDefinition':'mass in running order — dane oficjalne UK, nie PL','seatHeightMm':700,'tankL':16.5},chassis={'rearWheelIn':16},sourceUrls=['https://zontes.co.uk/zt125-c/']),
}

def merge(dst, src):
    for k,v in src.items():
        if isinstance(v,dict) and isinstance(dst.get(k),dict): merge(dst[k],v)
        elif v is None: dst.pop(k,None)
        else: dst[k]=v

for path in ROOT.glob('*.md'):
    text=path.read_text()
    data=json.loads(text.split('---',2)[1])
    if data['slug'] not in U: raise RuntimeError(f'Missing audit update: {data["slug"]}')
    merge(data,U[data['slug']]); data['verifiedAt']=AS_OF
    body=text.split('---',2)[2]
    path.write_text('---\n'+json.dumps(data,ensure_ascii=False,separators=(',',':'))+'\n---'+body)
print(f'Updated {len(U)} audited records')
