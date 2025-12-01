# TODO

# Sources
https://developer.mozilla.org/en-US/docs/Glossary/REST

https://www.restapitutorial.com/

# Notes about response
+ Response includes info about the data type to invoke correct parser (MIME type).
+ HATEOAS (add links-key to response)
    + At least "self" to show the link that can be used to get the same data as now was gotten.
    * Other links one step further from the above link
        + "self" : "domain.suffix/sounds"
        + "random" : "domain.suffix/sounds/random"
        + "groups" : "domain.suffix/sounds/groups"

# HTTP methods
In addition to CRUD, there is [OPTIONS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/OPTIONS).