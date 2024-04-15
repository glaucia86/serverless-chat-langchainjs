import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';

export async function getDocument(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  const name = request.query.get('name') || (await request.text()) || 'world';

  return { body: `Hello, ${name}! GET Documents Function` };
}

app.http('documents-get', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: getDocument,
});
