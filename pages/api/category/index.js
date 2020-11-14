export default async (req, res) => {
    const request = await fetch("http://weeding.test/api/category")
    const result = await request.json()
    return res.json(result)
}