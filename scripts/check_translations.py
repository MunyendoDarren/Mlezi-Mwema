#!/usr/bin/env python3
"""Verify the English and Swahili content have identical structure (CI-friendly)."""
import json, subprocess, sys, pathlib

src = pathlib.Path(__file__).resolve().parent.parent / "js" / "content.js"
text = src.read_text(encoding="utf-8")
try:
    out = subprocess.run(
        ["node", "-e", text + "\nconsole.log(JSON.stringify({APPS,CONTENT}))"],
        capture_output=True, text=True, check=True).stdout
    data = json.loads(out)
except FileNotFoundError:
    print("node not found: install Node.js to run this check"); sys.exit(2)
except subprocess.CalledProcessError as e:
    print("content.js failed to parse:\n" + e.stderr); sys.exit(2)

def shape(x):
    if isinstance(x, dict): return {k: shape(v) for k, v in sorted(x.items())}
    if isinstance(x, list): return [len(x)] + ([shape(x[0])] if x else [])
    return "str"

def empties(x, path=""):
    if isinstance(x, dict):
        for k, v in x.items(): yield from empties(v, f"{path}.{k}")
    elif isinstance(x, list):
        for i, v in enumerate(x): yield from empties(v, f"{path}[{i}]")
    elif not str(x).strip(): yield path

errors = []
if shape(data["CONTENT"]["en"]) != shape(data["CONTENT"]["sw"]):
    errors.append("CONTENT: en/sw structures differ")
for a in data["APPS"]:
    if shape(a["en"]) != shape(a["sw"]): errors.append(f"APPS: {a['name']} en/sw differ")
errors += [f"empty string at {p}" for p in empties(data)]

if errors:
    print("\n".join(errors)); sys.exit(1)
print("OK: English and Swahili content match.")
