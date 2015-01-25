# AutoKitty

AutoKitty helps you sort out complicated group expenses.

## Setup

1. Install Meteor https://www.meteor.com/install

## Dev server

To start a local server that automatically watches files for changes in the project root run:

```
meteor
```

## Branches and deployment

Branch | Status | URL
--- | --- | ---
`develop` | ![Codeship Badge](https://codeship.com/projects/1a2f0500-86e2-0132-5bf1-1acd4a1b78e5/status?branch=develop) | None
`staging` | ![Codeship Badge](https://codeship.com/projects/1a2f0500-86e2-0132-5bf1-1acd4a1b78e5/status?branch=staging) | [autokitty.meteor.com](http://autokitty.meteor.com)
`master` | ![Codeship Badge](https://codeship.com/projects/1a2f0500-86e2-0132-5bf1-1acd4a1b78e5/status?branch=master) | ???

Use `develop` for day to day development and feature branching.

PR from `develop` into `staging` to deploy to Meteor free hosting at [autokitty.meteor.com](http://autokitty.meteor.com).

PR from `staging` into `master` to deploy to ???.

### Manual deployment to Meteor free hosting

The local version of your app can be deployed to Meteor free hosting at any time.

1. Create a Meteor developer account https://www.meteor.com
2. Ask to be added to the `comrades` Meteor organisation
3. Login to Meteor on the command line with `meteor login`
3. Run `meteor deploy autokitty` to deploy your local files
4. Or alternatively if you want to deploy to a new url run something like `meteor deploy some-new-name-here`

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

## Packages

Meteor packages are installed using the Atmosphere package manager [atmospherejs.com](https://atmospherejs.com).

Meteor keeps track of all the installed packages and their versions in `.meteor/versions`, we don't edit this file.

User added packages are defined in `.meteor/packages`. We can edit this file to add packages to our project, or add them automatically (a la `npm install X --save`) with:

```
meteor add <package name>
```

## Mongo shell

Metoer uses a local-to-your-project, in-memory, non-persistant, JavaScript version of MongoDB when you run your dev server, it doesn't install a real MongoDB on your system.

To interact with this local version of the database drop into the Mongo shell:

```
meteor mongo
```

### Mongo shell commands

> Tab completion works well in the shell, so be sure to use it while experimenting with commands.

List all collections:

```
show collections;
```

List all documents in a collection:

```
db.<collection name>.find();
db.<collection name>.find().pretty(); // Same but format output for readability
```

Search for documents in a collection which contain certain values:

```
db.<collection name>.find({foo: "bar"});
```

Create a new document (although this will create a document with an `ObjectId()` id, which is different behaviour to documents created through Meteor itself - need to look into this):

```
db.<collection name>.insert({foo: "bar"});
```

Nuke the Meteor database and start again:

```
db.dropDatabase();
```
