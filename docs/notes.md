# Notes

# Response
+ Response includes info about the data type to invoke correct parser (MIME type).
+ HATEOAS (add links-key to response)
    + At least "self" to show the link that can be used to get the same data as now was gotten.
    * Other links one step further from the above link
        + "self" : "domain/customers/1"
        + "orders" : "domain/customers/1/orders"

# HTTP methods
In addition to CRUD, there is [OPTIONS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/OPTIONS).

Indempotence = Same call yields same result (DELETE, PUT, READ..., but not PATCH)