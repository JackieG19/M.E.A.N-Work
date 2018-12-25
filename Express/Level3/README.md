## Creating an express app (part 3)

1. A /cities route that will display all cities
    - The /cities route accept a limit query that will send back:
      - The number of cities requested
      - All cities if 0 is provided or if limit query is omitted
      -  return a status error if the limit is higher than the number of cities available in the list

3. Add a dynamic route to /citie that respond with the state that the city resides in.

4. Dynamic route return Not Found status code if the requested city is not available.

5. Makes sure to normalize the data sent in the /cities route. 
   - The city sent should be sendable in any case and still find the state it’s in. 
   - ie. Providence and providence should both return Rhode Island.

6. Normalizing of the data using a middleware function.

7. The /cities route display 

8. The other routes only accessed by curl currently
