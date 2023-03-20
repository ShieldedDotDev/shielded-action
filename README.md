# shielded-action

This action updates a badge on [Shielded.dev](https://shielded.dev) with the latest status of your project as specified in the action's inputs.

## Usage

```yaml
name: Update Shield
on:
  push:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Update Shielded.dev Badge
        uses: shieldeddotdev/shielded-action@v1
        with:
          shielded-token: ${{ secrets.SHIELDED_TOKEN }}
          title: 'Title of the badge'
          color: '0011aa'
          text: '0 warnings'
```

## Inputs

- **shielded-token** **(Required)** - Your shielded.dev token
- **endpoint** _(Optional)_ - The endpoint to use. Defaults to `https://api.shielded.dev/`
- **title** _(Optional)_ - The title of the badge - omitting this will leave it as-is
- **color** _(Optional)_ - The color of the badge - omitting this will leave it as-is
- **text** _(Optional)_ - The text of the badge - omitting this will leave it as-is
