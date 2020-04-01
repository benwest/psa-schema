<<<<<<< HEAD
#PSA JSON API Schema
=======
# PSA JSON API Schema

## URLs

### Visit & Tickets

**URL**: `/visit-and-tickets`
   
**Schema**: schema/visit-and-tickets.json

### A Power Store

**URL**: `/a-power-store?offset=<offset>&limit=<limit>&type=<type>&tags=<tags>`

**Schema**: schema/a-power-store.json

**Parameters**
- **limit**: Maximum number of items returned
- **offset**: Index of the first item
- **type**: Filter by productType of the item
- **tags**: Filter by tags of the item (`tag1|tag2`)

### A Power Store: Product

**URL**: `/a-power-store/<slug>`

**Schema**: schema/product.json

### About PSA

**URL**: `/about-psa`

**Schema**: schema/about-psa.json

### PSA Collections

**URL**: `/psa-collections?offset=<offset>&limit=<limit>&type=<type>&tags=<tags>`

**Schema**: schema/psa-collections.json

**Parameters**
- **limit**: Maximum number of items returned
- **offset**: Index of the first item
- **type**: Filter by artworkType of the item
- **tags**: Filter by tags of the item (`tag1|tag2`)

### PSA Collections: Artwork

**URL**: `/psa-collections/<slug>`

**Schema**: schema/artwork.json

### What's On

**URL**: `/whats-on`

**Schema**: schema/whats-on.json

### What's On: Exhibitions

**URL**: `/whats-on/exhibitions?offset=<offset>&limit=<limit>&tags=<tags>`

**Schema**: schema/exhibitions.json

**Parameters**
- **limit**: Maximum number of items returned
- **offset**: Index of the first item
- **tags**: Filter by tags of the item (`tag1|tag2`)

### What's On: Exhibition

**URL**: `/whats-on/exhibitions/<slug>`

**Schema**: schema/exhibition.json

### What's On: Activities

**URL**: `/whats-on/activities?offset=<offset>&limit=<limit>&type=<type>&tags=<tags>`

**Schema**: schema/exhibitions.json

**Parameters**
- **limit**: Maximum number of items returned
- **offset**: Index of the first item
- **type**: Filter by activityType of the item
- **tags**: Filter by tags of the item (`tag1|tag2`)

### What's On: Activity

**URL**: `/whats-on/activities/<slug>`

**Schema**: schema/activity.json

### What's On: News

**URL**: `/whats-on/news?offset=<offset>&limit=<limit>&type=<type>&tags=<tags>`

**Parameters**
- **limit**: Maximum number of items returned
- **offset**: Index of the first item
- **type**: Filter by newsType of the item
- **tags**: Filter by tags of the item (`tag1|tag2`)

**Schema**: schema/news.json

### What's On: News Item

**URL**: `/whats-on/news/<slug>`

**Schema**: schema/news-item.json

### What's On: Program

**URL**: `/whats-on/programs/<slug>`

**Schema**: schema/program.json

### What's On: Program: Subpage

**URL**: `/whats-on/programs/<program-slug>/<page-slug>`

**Schema**: schema/program-page.json

### Contact

**URL**: `/more/contact`

**Schema**: schema/page.json

### Search Results

**URL** `/search?q=<q>&limit=<limit>&offset=<offset>`

**Schema**: schema/search-results.json

**Parameters**
- **q**: The search query
- **limit**: Maximum number of items returned
- **offset**: Index of the first item

>>>>>>> 04601feda04cb7fd1ee7eea49769641410037b9d
