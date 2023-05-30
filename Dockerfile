FROM denoland/deno

ENV SPACE_ID="H1PxgqNFW1DNvKah\Adventures In Gather Town"
ENV API_KEY="Yv7KTMgWas9ym3wo"
# ENV ENVIRONMENT="local"
# Encoded: 1fe92224bc30c68c90559b45db160fa7bb9010ce8ee42cbb54fdde9e642be07d
# The key will be revoked after testing, create a new one at: https://gather.town/apiKeys

WORKDIR /app

ADD ./app /app

RUN deno cache main.ts

EXPOSE 8080
CMD ["run", "--allow-net", "--allow-env", "main.ts"]
