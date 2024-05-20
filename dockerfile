# 첫 번째 단계: Node.js 기반의 빌드 환경을 설정합니다.
FROM node:14.17.0-alpine as build

# 앱 디렉토리를 생성하고 작업 디렉토리로 설정합니다.
WORKDIR /app

# package.json 및 package-lock.json을 복사하여 종속성을 설치합니다.
COPY package.json package-lock.json ./
RUN npm install

# 소스 코드를 복사하여 앱을 빌드합니다.
COPY . .

# 빌드된 앱을 실행합니다.
CMD ["npm", "start"]