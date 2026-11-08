FROM alpine:latest

RUN apk update && apk add --no-cache curl unzip

# تحميل وتشغيل Xray
RUN mkdir -p /etc/xray /usr/local/share/xray
RUN curl -L -o /tmp/xray.zip https://github.com/XTLS/Xray-core/releases/latest/download/Xray-linux-64.zip
RUN unzip /tmp/xray.zip -d /usr/local/bin/

# ملف الإعدادات الخاص بسيرفر Xray
COPY config.json /etc/xray/config.json

EXPOSE 10000

CMD ["xray", "-config", "/etc/xray/config.json"]
