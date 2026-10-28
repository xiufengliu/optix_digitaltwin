#!/usr/bin/env python3
"""Download DK2 2015-2024 data from Energinet (energidataservice.dk) with rate-limit backoff.

Usage: python scripts/fetch_dk2_data.py RAW_DIR   (then scripts/build_dk2_dataset.py RAW_DIR OUT_CSV)
"""
import json, re, sys, time, urllib.parse, urllib.request
out = sys.argv[1]
BASE = 'https://api.energidataservice.dk/dataset/'
JOBS = {
    'production': ('ProductionConsumptionSettlement', {
        'start': '2014-12-31T00:00', 'end': '2025-01-02T00:00', 'filter': json.dumps({'PriceArea': ['DK2']}),
        'columns': 'HourUTC,HourDK,SolarPowerLt10kW_MWh,SolarPowerGe10Lt40kW_MWh,SolarPowerGe40kW_MWh,SolarPowerSelfConMWh,'
                   'OnshoreWindLt50kW_MWh,OnshoreWindGe50kW_MWh,OffshoreWindLt100MW_MWh,OffshoreWindGe100MW_MWh,HydroPowerMWh,GrossConsumptionMWh',
        'sort': 'HourUTC ASC', 'limit': '0'}),
    'prices': ('Elspotprices', {
        'start': '2014-12-31T00:00', 'end': '2025-01-02T00:00', 'filter': json.dumps({'PriceArea': ['DK2']}),
        'columns': 'HourUTC,HourDK,SpotPriceDKK,SpotPriceEUR', 'sort': 'HourUTC ASC', 'limit': '0'}),
    'capacity': ('CapacityPerMunicipality', {
        'start': '2014-01-01', 'end': '2025-02-01', 'columns': 'Month,MunicipalityNo,OnshoreWindCapacity,OffshoreWindCapacity,SolarPowerCapacity',
        'sort': 'Month ASC', 'limit': '0'}),
}
for name, (ds, params) in JOBS.items():
    path = f'{out}/{name}.json'
    for attempt in range(8):
        url = BASE + ds + '?' + urllib.parse.urlencode(params)
        try:
            with urllib.request.urlopen(url, timeout=300) as r:
                body = r.read()
            data = json.loads(body)
            if 'records' not in data:
                raise RuntimeError(str(data)[:200])
            open(path, 'wb').write(body)
            print(name, 'records', len(data['records']), flush=True)
            break
        except Exception as e:
            msg = getattr(e, 'read', lambda: b'')().decode(errors='ignore') if hasattr(e, 'read') else str(e)
            wait = int(m.group(1)) + 5 if (m := re.search(r'(\d+) seconds', msg)) else 60
            print(name, 'retry in', wait, 's:', msg[:120], flush=True)
            time.sleep(wait)
    time.sleep(20)
