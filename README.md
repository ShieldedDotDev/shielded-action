# shielded-action

[Shielded.dev](https://shielded.dev) is a free service that allows you to create custom shields for your projects. This action allows you to update the status of a shield on [Shielded.dev](https://shielded.dev) from your GitHub Actions workflow.

This action updates a badge on [Shielded.dev](https://shielded.dev) with the latest status of your project as specified in the action's inputs.

## Examples

|                    |                                                                                                    | 
|--------------------|----------------------------------------------------------------------------------------------------| 
| Build Status       | ![Build Status](https://img.shielded.dev/s?title=Build&amp;text=passing&amp;color=28a3df)          | 
| Code Coverage      | ![Code Coverage](https://img.shielded.dev/s?title=Coverage&amp;text=100%25&amp;color=28a3df)       | 
| Code Quality       | ![Code Quality](https://img.shielded.dev/s?title=Quality&amp;text=A%2B&amp;color=green)            | 
| License            | ![License](https://img.shielded.dev/s?title=License&amp;text=MIT&amp;color=428F7E)                 | 
| Version            | ![Version](https://img.shielded.dev/s?title=Stable&amp;text=1.2.34&amp;color=28a3df)               | 
| Downloads          | ![Downloads](https://img.shielded.dev/s?title=Daily+Downloads&amp;text=128&amp;color=28a3df)       | 
| Open Issues        | ![Open Issues](https://img.shielded.dev/s?title=Issues&amp;text=5&amp;color=99004d)                | 
| Open Pull Requests | ![Open Pull Requests](https://img.shielded.dev/s?title=Pull+Requests&amp;text=1&amp;color=99004d)  | 
| Code Size          | ![Code Size](https://img.shielded.dev/s?title=Code+Size&amp;text=1.2mb&amp;color=5c72a6)           | 
| Contributors       | ![Contributors](https://img.shielded.dev/s?title=Contributors&amp;text=13&amp;color=5c72a6)        | 
| Commit Activity    | ![Commit Activity](https://img.shielded.dev/s?title=Commits&amp;text=2%2Fweek&amp;color=28a3df)    | 
| Release Activity   | ![Release Activity](https://img.shielded.dev/s?title=Releases&amp;text=1%2Fmonth&amp;color=28a3df) | 


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
