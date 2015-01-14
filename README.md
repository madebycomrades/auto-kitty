# AutoKitty

AutoKitty helps you sort out complicated group expenses.

## Setup

1. Install Meteor https://www.meteor.com/install
2. ???

## Dev server

To start a local server that automatically watches files for changes run:

```
meteor
```

## Folder structure

Special folders:

- `client` Client side code
- `client/compatibility` Client side files that expose a global (e.g. jQuery etc.)
- `server` Server side code only
- `private` Server side static assets (data files, etc?)
- `public` Servable public static assets (images, CSS)
- `tests` Not loaded anywhere, test code

All other folders contain code usable by both the client and the server, by convention the
following folders are used:

- `lib` Shared logic and utils
- `collections` Shared Collection definitions
- `routes` Shared route definitions
