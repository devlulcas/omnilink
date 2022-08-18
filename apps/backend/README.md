## Gere suas chaves

```bash
ssh-keygen -t rsa -b 4096 -m PEM -f jwt.key
openssl rsa -in jwt.key -pubout -outform PEM -out jwt.key.pub
```

## Com docker compose

```bash

```

## Apenas a imagem do servidor

- Construa

```bash
docker build -t omnilink-backend .
```

- Execute (mapeando a a porta local 3030 para a porta do container 8080)

```bash
docker run -p 3030:8080 omnilink-backend
```

- Acesse em [http://localhost:3030](http://localhost:3030)
