# AutoKitty

AutoKitty helps you sort out complicated group expenses.

## Setup

1. Install Meteor https://www.meteor.com/install

## Dev server

To start a local server that automatically watches files for changes in the project root run:

```
meteor
```

## Deployment to Meteor free hosting

The app is deployed to `autokitty.meteor.com`. Meteor free hosting is not recommended for production
but is good enough to use for a staging server or similar.

In future we should be able to trigger a deployment to `autokitty.meteor.com` from Codeship, but
in the meantime here are the steps to get the app live.

1. Create a Meteor developer account https://www.meteor.com
2. Ask to be added to the `comrades` Meteor organisation
3. Login to Meteor on the command line with `meteor login`
3. Run `meteor deploy autokitty` to deploy your local files

## Folder structure

Special folders:

- `client` Client side code. All JS found in here is concatenated and served to the client. All HTML files found in here are bundled into templates. Additionally any CSS files will be concatenated and automatically included on the page.
- `client/compatibility` Old style JS files that expose a single global (e.g. jQuery etc.)
- `server` Server side code. All JS found in here is run on the server only.
- `private` Server side static assets (data files, etc?)
- `public` Servable public static assets (images, CSS, etc?)
- `tests` Test code

All other folders contain code usable by both the client and the server, by convention the
following folders are used:

- `lib` Shared logic and utils
- `collections` Shared Collection definitions
- `routes` Shared route definitions

## Mongo shell

You can interact with the local version of the database, run the following command to drop into the
Mongo shell:

```
meteor mongo
```

Once inside the Mongo shell you can run Mongo commands to interact with the local db.

List all documents in a collection:

```
db.<collection name>.find();
```

Nuke the database and start again:

```
db.dropDatabase();
```
