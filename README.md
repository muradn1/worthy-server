this is a Graphql server.
relevant queries and mutations:

* mutataion calcDiamondPrice(price,cut,clarity,caratWeight)
  - creates and saves diamond with these params to DB (inMemory array)
  - estimate diamond price according to these characteristics
  - return the new diamond's characteristics (espacially its generated id)  with the estimated price


* query findSimilarDiamonds(diamondId,limit?)
 - find up to {limit} (by default = 4) similar diamonds based on its characteristics

each operation has an engine that estimates the result based on corsponding config

this server also serve images as static files (based on express middleware)

