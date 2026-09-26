# Docker Deployment

## Run with NGINX

Start the Next.js app and NGINX reverse proxy:

```sh
docker compose up --build -d
```

Open `http://localhost`. NGINX listens on port 80 and forwards requests to the
app over the private Compose network. View logs with `docker compose logs -f`
and stop the services with `docker compose down`.

## Run the app without NGINX

The Dockerfile is lowercase, so specify it explicitly when building:

```sh
docker build -f dockerfile -t 44th-rof-site .
docker run --rm -p 3000:3000 -e PORT=3000 44th-rof-site
```
