import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';

export async function postChat(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  const name = request.query.get('name') || (await request.text()) || 'world';

  return { body: `Hello, ${name}! POST Chat Function` };
}

app.http('chat-post', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: postChat,
});
