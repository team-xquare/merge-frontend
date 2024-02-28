FROM node:18.12.0 AS builder

WORKDIR /app

RUN apt-get update && apt-get install -y libc6-compat

COPY manifests ./

RUN yarn install --immutable

COPY packs ./

RUN yarn workspace @merge/user build

# 실행 단계
FROM nginx:alpine AS runner

RUN echo "\
server {\
    listen 3000;\
    location / {\
        root   /usr/share/nginx/html;\
        index  index.html index.htm;\
        try_files \$uri \$uri/ /index.html =404;\
    }\
}" > /etc/nginx/conf.d/default.conf

COPY --from=builder /app/packages/user/dist /usr/share/nginx/html

# 3000포트 열기
EXPOSE 3000

# Nginx 시작
CMD ["nginx", "-g", "daemon off;"]