export async function listResources(_req: any, res: any) {
  // Placeholder until DB schema & models are wired.
  return res.json({ items: [], page: 1, total: 0 })
}

export async function uploadResourceMetadata(_req: any, res: any) {
  return res.status(501).json({ error: 'Not implemented: resource upload metadata + file upload' })
}

export async function deleteResource(_req: any, res: any) {
  return res.status(501).json({ error: 'Not implemented: delete resource' })
}

