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

import os
import json
import re


def process_simple(file):

    with open(file + ".txt", "r", encoding="utf-8") as f:
        lines = f.read().split("\n")

    numdict = {
        "First": 1,
        "Second": 2,
        "Third": 3,
        "Fourth": 4,
        "Fifth": 5,
        "Sixth": 6,
    }

    out = {}

    for line in lines:
        if (
            line.startswith("First-Tier")
            or line.startswith("Second-Tier")
            or line.startswith("Third-Tier")
            or line.startswith("Fourth-Tier")
            or line.startswith("Fifth-Tier")
            or line.startswith("Sixth-Tier")
        ):
            tier = line.split(" ")[0]
            name = line.split(" ")[1]
            tier = numdict[tier.split("-")[0]]

            if name not in out:
                out[name] = {}

            out[name][tier] = line

        else:
            out[name][tier] += line + "\n"

    with open(file + ".json", "w", encoding="utf-8") as f:
        json.dump(
            {k: {kk: vv.strip() for kk, vv in v.items()} for k, v in out.items()},
            f,
            indent=4,
        )


process_simple("types")
process_simple("flavors")
# %%
