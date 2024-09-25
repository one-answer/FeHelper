FROM nginx:alpine
WORKDIR /app
COPY ./apps /app
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
