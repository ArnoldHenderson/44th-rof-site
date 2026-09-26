# Docker Deployment

## Run with NGINX and TLS

Place the CA-issued certificate chain and its matching private key on the host
at `/etc/nginx/certs/fullchain.pem` and `/etc/nginx/certs/private.key`. Keep
the private key out of source control. The directory is mounted read-only into
NGINX. To use another host directory, set `TLS_CERT_DIR` before running Compose.
The certificate must cover `44thholdfast.com`; point that domain's DNS to this
host before completing the CA's domain validation.

Open ports 80 and 443 on the host firewall. Port 80 redirects to HTTPS. Start
the Next.js app and NGINX reverse proxy:

```sh
docker compose up --build -d
```

Visit `https://44thholdfast.com`. NGINX terminates TLS and forwards
requests to the app over the private Compose network. View logs with
`docker compose logs -f` and stop the services with `docker compose down`.

## Run the app without NGINX

The Dockerfile is lowercase, so specify it explicitly when building:

```sh
docker build -f dockerfile -t 44th-rof-site .
docker run --rm -p 3000:3000 -e PORT=3000 44th-rof-site
```
