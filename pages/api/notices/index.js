import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const notices = await prisma.notice.findMany({
      orderBy: [
        { priority: 'desc' },
        { publishDate: 'desc' }
      ]
    })
    return res.status(200).json(notices)
  }

  if (req.method === 'POST') {
    const { title, body, category, priority, publishDate } = req.body

    if (!title || !body || !category || !priority || !publishDate) {
      return res.status(400).json({ error: 'All required fields must be filled' })
    }
    if (isNaN(new Date(publishDate))) {
      return res.status(400).json({ error: 'Invalid date' })
    }

    const notice = await prisma.notice.create({
      data: { title, body, category, priority, publishDate: new Date(publishDate) }
    })
    return res.status(201).json(notice)
  }

  res.status(405).json({ error: 'Method not allowed' })
}