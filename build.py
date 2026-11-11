import csv,html,json,pathlib,datetime
root=pathlib.Path(__file__).parent
rows=list(csv.DictReader((root/'products.csv').open()))
items=[]
for r in rows:
    if r['approved'].lower()!='yes' or not r['affiliate_url'].startswith('https://'): continue
    items.append(r)
cards=''.join(f'''<article><h2>{html.escape(r['model'])}</h2><p>{html.escape(r['condition'])} · {html.escape(r['carrier'])}</p><p>Price: {html.escape(r['price'])} (verify with retailer)</p><p>{html.escape(r['notes'])}</p><a rel="sponsored noopener noreferrer" target="_blank" href="{html.escape(r['affiliate_url'],quote=True)}">View at retailer</a></article>''' for r in items)
page=f'''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AutoPhone AI | Phone Deals</title><style>body{{font:16px system-ui;margin:0;background:#f6f8fb;color:#172235}}header,main,footer{{max-width:900px;margin:auto;padding:24px}}header{{background:#10233e;color:white;max-width:none}}header>div{{max-width:900px;margin:auto}}article{{background:white;border:1px solid #dde4ee;padding:22px;border-radius:14px;margin:16px 0}}a{{color:#0868bd}}.notice{{background:#fff3d7;padding:14px;border-radius:8px}}</style><header><div><h1>AutoPhone AI</h1><p>Compare smartphone offers with clarity.</p></div></header><main><p class="notice"><strong>Disclosure:</strong> We may earn a commission when you purchase through links on this site, at no additional cost to you.</p><h2>Phone offers</h2>{cards or '<p>No verified affiliate offers are published yet. Check back soon.</p>'}<p>Prices, availability, condition and seller terms may change. Verify all details with the retailer before purchase. We do not independently certify IMEI or battery health.</p></main><footer><small>AutoPhone AI is an independent referral site, not the retailer. Contact: add a business email before publishing.</small></footer></html>'''
(root/'index.html').write_text(page)
print('Built',len(items),'approved offers')
