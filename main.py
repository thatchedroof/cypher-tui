# %%

import os
import json
import re

with open("abilities.txt", "r", encoding="utf-8") as f:
    abilities = f.read().split("\n")

out = []

for line in abilities:
    if line.strip() == "":
        out[-1][1] += "\n"
    elif line[0] == " ":
        if len(out[-1][1]) == 0:
            out[-1][1] += line[4:]
        else:
            out[-1][1] += line[4:] + "\n"
    else:
        title = line.strip()[:-1]
        if len(title) > 1 and title[-1] == ")":
            points_match = re.search(r"\((.*?)\)", title)
            points = points_match.group(1) if points_match else ""
            title = title[: -len(points_match.group(0))].strip()
        else:
            points = ""
        out.append([title, points])

out = dict([(x[0], x[1].strip()) for x in out])

with open("abilities.json", "w", encoding="utf-8") as f:
    json.dump(out, f, indent=4)

# %%
