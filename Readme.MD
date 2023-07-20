[![N|Solid](https://iili.io/Hi9giog.png)](https://www.enverx.com/)

EnverX offers a simple and convenient platform to fund early-stage projects
and trade future carbon credits.

## _Assginment For Backend Developer Role_

### Pre-Requisites

1. Install NodeJS and npm in your machine
2. MongoDB should be installed and running properly or you could use atlas

### Dependencies

Node,Express,Npm,Git,Mongodb,Mongoose,Nodemon

### Installation

1. Clone the repo

```
git clone git@github.com:kdsanskar07/enverx-be-developer-assignment.git
```

2. Install the dependencies

```
cd enverx-be-developer-assignment
npm install
```

3. Add the port as per your requirement in .env file
4. Add the mongoDB url to the database you have created
5. Start the server

```
npm start
```

The Server will start running on `http://localhost:<port>` and make sure the db is up and running before making the requests.

### Schema

One Schema was made- BlogModel

#### BlogModel Schema

##### Fields

1. title - String - Title of the blog
2. author - String - Author's name
3. content - String - Blog Content
4. categoryIds - Array - List of categoryIds
5. createdAt - Date - Date of the article creation
6. updatedAt - Date - Date of the article updation

### API Endpoints

1. #### POST Endpoint
   Endpoint: `POST /posts`

Request Body:

```
{
  "title": "Blog Title",
  "author": "user1",
  "content": "This is a blog",
  "categoryIds": ["react", "nodejs"]
}
```

Response:

```
{
    success: true,
    message: "Created new blog",
    data: {
        "_id": "64b96f11fd0dc2c01091fec2",
        "content": "This is blog",
        "title": "Blog Title",
        "category": ["react", "nodejs"],
        "authorId": "user1",
        "createdAt": "2023-07-20T17:29:53.713Z",
        "updatedAt": "2023-07-20T17:29:53.713Z"
    }
}
```

2. #### Retrieve a post by ID

Endpoint : `GET /posts/:id`

Example: `GET /posts/64b96f11fd0dc2c01091fec2`

Response:

```
{
    success: true,
    message: "Successfully fetched blogs",
    data: {
        "_id": "64b96f11fd0dc2c01091fec2",
        "content": "This is blog",
        "title": "Blog Title",
        "category": ["react", "nodejs"],
        "authorId": "user1",
        "createdAt": "2023-07-20T17:29:53.713Z",
        "updatedAt": "2023-07-20T17:29:53.713Z"
    }
}
```

3. #### Update a post

Endpoint: `PUT /posts/:id`

Example: `PUT /posts/64b96f11fd0dc2c01091fec2`

Request Body:

```
{
    "content": "This is updated blog",
}
```

Response:

```
{
    success: true,
    message: "Updated blog",
    data: {
        "_id": "64b96f11fd0dc2c01091fec2",
        "content": "This is updated blog",
        "title": "Blog Title",
        "category": ["react", "nodejs"],
        "authorId": "user1",
        "createdAt": "2023-07-20T17:29:53.713Z",
        "updatedAt": "2023-07-20T17:43:58.673Z"
    }
}
```

4. #### Get all posts with filters and sorting

Endpoint: `GET /posts`

Query Parameters:

`categoryIds`: Filter post by category

`sortOrder`: Sort order : `asc` or `desc`

Example:

Retrieving Posts based on category and sorted by date(asc by default)

Endpoint: `http://localhost:3000/posts?category=Family&sortBy=date`

Response:

```
{
    success: true,
    message: "Successfully fetched all blogs",
    data: [
        {
            "_id": "64b96f11fd0dc2c01091fec2",
            "content": "This is updated blog",
            "title": "Blog Title",
            "category": ["react", "nodejs"],
            "authorId": "user1",
            "createdAt": "2023-07-20T17:29:53.713Z",
            "updatedAt": "2023-07-20T17:43:58.673Z"
        },
        {
            "_id": "64c96f11fd0dc2601091gfe4",
            "content": "This is blog-1",
            "title": "Blog Title-1",
            "category": ["react", "nodejs"],
            "authorId": "user1",
            "createdAt": "2023-07-20T18:29:53.713Z",
            "updatedAt": "2023-07-20T18:29:58.713Z"
        },
    ],
}
```
5. #### Delete a post

Endpoint: `DELETE /posts/:id`

Example: `DELETE /posts/64b96f11fd0dc2c01091fec2`

Response:

```
{
    success: true,
    message: "Deleted blog"
}
```
