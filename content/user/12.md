---
title: "Custom Taxonomy Archive Alphabetical Listing"
date: "2020-10-01"
author: Lax Mariappan
category: user
excerpt: Sort posts in alphabetical order using a custom query for a custom taxonomy archive.
---


The argument passed to the function contains the query parameters of each query, so you can check which query it is and only alter your taxonomy main query. This function would go in your theme's functions.php file, or a plugin.

```php
function wpd_adhesion_taxonomy_queries( $query ) {
    if ( !is_admin() && $query->is_tax( 'adhesion' ) && $query->is_main_query() ) {
        $query->set( 'orderby', 'title' );
        $query->set( 'order', 'ASC' );
    }
}
add_action( 'pre_get_posts', 'wpd_adhesion_taxonomy_queries' );
```
Source: https://wordpress.stackexchange.com/a/180183/103640