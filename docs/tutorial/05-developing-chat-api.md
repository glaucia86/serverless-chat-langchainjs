# Developing the `chat` API

<!--Code Developed **[commit](https://github.com/Azure-Samples/serverless-chat-langchainjs/commit/8bfda2f522d55150b0b773c36deba82bbcdc43fd)**-->

Nessa seção do tutorial, vamos desenvolver a função `chat-post` ou a API `chat`. Essa API será responsável por lidar com uma sequencia de mensagens. A mensagem final deve representar a consulta atual do usuário. Ao receber essas mensagens, o endpoint (`api/chat`) usará um modelo de IA pré-treinado para gerar uma resposta apropriada. Ele também fará referência a documentos armazenados num banco de dados dedicado para aumentar a precisão e a relevância da resposta da IA.
