# AutoPhone AI — $0 affiliate starter

This is a **static website generator**, not a live connected AI agent. It publishes only CSV rows marked `approved=yes` with HTTPS affiliate URLs. There is no scraping, paid API, automated social posting, or real product data. Do not publish demo offers as real offers.

## Run

1. Install Python 3 (no third-party packages required).
2. Run `python3 build.py` inside this directory.
3. Open `index.html` in a browser.
4. Apply to an affiliate network and obtain approval. Replace the demo CSV with accurately sourced products, *authorized affiliate URLs*, and verified details. Mark rows `approved=yes` only after checking them.
5. Replace the placeholder contact email in `build.py` before publishing.
6. Create a GitHub public repository and upload `index.html`, `build.py`, `products.csv`. Under Settings → Pages, choose Deploy from a branch, `main`, `/ (root)`.
7. To update, edit CSV, rerun `python3 build.py`, commit updated `index.html`.

## Automation after approval

- Request authorized eBay product API/feed access; approval is not automatic.
- Add a feed adapter using approved endpoints only. Respect rate limits, attribution, image rights, and permitted caching.
- Run validation before publishing: authorized source, valid affiliate URL, correct condition, seller reliability, updated price, and required disclosure.
- Schedule only after tests and access are granted. Keep social posts as drafts until platform API permissions are confirmed.

## Safety checklist

- Do not publish unsupported IMEI, battery health, condition, or sales claims.
- Keep affiliate disclosure next to links.
- No automated purchases, bank access, paid ads, or scraping.
- No keys or personal information in public repositories.
- Confirm program rules allow your chosen hosting and traffic sources.

## Test plan

- Empty/invalid affiliate links never publish.
- `approved=no` rows never publish.
- Check HTML escaping on product fields.
- Test mobile view and outbound links.
- Confirm disclosures and contact details.
- Recheck prices and stock before publishing; remove expired offers.
