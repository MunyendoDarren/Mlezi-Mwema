# Mlezi Salama: Children's Online Safety Guide (Kiswahili / English)

A free, bilingual, offline-capable web guide for parents and guardians covering:

- **Grooming warning signs** (pattern-level, protective)
- **Popular apps** (WhatsApp, TikTok, Instagram, YouTube, Snapchat, Roblox, Discord): risks and safer settings
- **Parental controls** (Google Family Link, iPhone Screen Time, home DNS filtering)
- **Interactive safety checklist** and a **"what to do if you're worried"** action plan
- **Help contacts** (Childline Kenya 116, police)

Swahili / Kiswahili: mwongozo wa bure kwa wazazi na walezi kuhusu usalama wa watoto mtandaoni.

## Security and privacy by design

| Control | How |
|---|---|
| No data collection | No analytics, cookies, forms or network calls |
| Strict Content-Security-Policy | `default-src 'none'`, scripts/styles from `self` only |
| XSS-safe rendering | Content rendered with `textContent`; no `innerHTML`, no `eval` |
| No third-party dependencies | Zero CDNs, fonts or libraries (no supply-chain risk) |
| Referrer suppressed | `referrer: no-referrer` |
| Content QA in CI | GitHub Action checks EN/SW parity (`scripts/check_translations.py`) |

## Run locally
Open `index.html` in a browser, or: `python3 -m http.server 8000`

## Deploy free on GitHub Pages
Repo **Settings > Pages > Deploy from branch > `main` / root**.

## Edit or add content
All text is in `js/content.js`. Add the same keys to both `en` and `sw`, then run:
```
python3 scripts/check_translations.py
```

## Roadmap
- Add Sheng and other Kenyan languages
- Printable PDF and WhatsApp-friendly summary
- Native-speaker review of Swahili wording (contributions welcome)
- Accessibility audit (Lighthouse / axe)

## Disclaimer
Educational use only. App menus change; verify with each app's official help centre and confirm emergency numbers locally. Not legal advice.

## License
MIT
