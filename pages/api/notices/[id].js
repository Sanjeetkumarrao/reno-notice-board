import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  const { id } = req.query

  if (req.method === 'PUT') {
    const { title, body, category, priority, publishDate } = req.body

    if (!title || !body || !category || !priority || !publishDate) {
      return res.status(400).json({ error: 'All required fields must be filled' })
    }
    if (isNaN(new Date(publishDate))) {
      return res.status(400).json({ error: 'Invalid date' })
    }

    const notice = await prisma.notice.update({
      where: { id: parseInt(id) },
      data: { title, body, category, priority, publishDate: new Date(publishDate) }
    })
    return res.status(200).json(notice)
  }

  if (req.method === 'DELETE') {
    await prisma.notice.delete({ where: { id: parseInt(id) } })
    return res.status(200).json({ message: 'Deleted' })
  }

  res.status(405).json({ error: 'Method not allowed' })
}