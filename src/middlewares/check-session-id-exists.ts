import { FastifyRequest, FastifyReply } from 'fastify'

export async function checkSessionIdExists(
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<void> {
  const sessionId = request.cookies.sessionId

  if (!sessionId) {
    return reply.status(401).send({
      error: 'Unauthorized.',
    })
  }
}
