# /bin/bash

docker run -d -p 3000:80 --name aplab --network root_static_network --restart unless-stopped aplab
