In the project directory, you can run:

### `npm run dev`

## API Documentation
### Entities
#### Search for all entities
- **Method:** GET
- **Path:** /entities
- **Description:** Getting a list of all entities.
#### Search for an entity by ID
- **Method:** GET
- **Path:** /entities/:id
- **Description:** Getting information about an entity by its unique identifier.
#### Search for an entity by phone number
- **Method:** GET
- **Path:** /entities/phone/:phoneNumber
- **Description:** Getting information about an entity by phone number.
#### Create a new user
- **Method:** POST
- **Path:** /entities
- **Description:** Creating a new entity (user).
#### Update user data by ID
- **Method:** PUT
- **Path:** /entities/:id
- **Description:** Updating information about an entity by its unique identifier.
#### Delete user data by ID
- **Method:** DELETE
- **Path:** /entities/:id
- **Description:** Deleting information about an entity by its unique identifier.
### Handbook
#### Get a list of regions
- **Method:** GET
- **Path:** /handbook/regions
- **Description:** Getting a list of regions.
### Requests
#### Get a list of user requests
- **Method:** GET
- **Path:** /requests
- **Description:** Getting a list of user requests.
#### Record user requests in the database
- **Method:** POST
- **Path:** /requests
- **Description:** Recording user requests in the database.
### Groups
#### Get a list of all groups
- **Method:** GET
- **Path:** /groups
- **Description:** Getting a list of all groups.
#### Search for a group by ID
- **Method:** GET
- **Path:** /groups/:id
- **Description:** Getting a group by its unique identifier.
#### Create a new group
- **Method:** POST
- **Path:** /groups
- **Description:** Creating a new group.
#### Add a user to the group
- **Method:** POST
- **Path:** /groups/addGroupUser
- **Description:** Adding a user to the group.
#### Update the group
- **Method:** PUT
- **Path:** /groups/:id
- **Description:** Updating information about the group by its unique identifier.
#### Delete the group
- **Method:** DELETE
- **Path:** /groups/:id
- **Description:** Deleting information about the group by its unique identifier.
### Mailing
#### Plan of all mailings
- **Method:** GET
- **Path:** /mailing
- **Description:** Getting the entire mailing list.
#### Adding a mailing by ID
- **Method:** POST
- **Path:** /groups/:id
- **Description:** Adding a mailing by its unique identifier.
