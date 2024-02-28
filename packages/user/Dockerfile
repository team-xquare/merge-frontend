# 가져올 이미지를 정의
FROM node:18.12.0

# 경로 설정하기
WORKDIR /app

COPY manifests ./

RUN yarn install

COPY packs ./

COPY . .

ARG BASE_URL
ENV VITE_SERVER_BASE_URL $BASE_URL

EXPOSE 3000

CMD ["yarn", "dev"]