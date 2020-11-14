export default async (req, res) => {
    
    const {
        query: { id }
    } = req;

    const request = await fetch("http://weeding.test/api/category/"+id)
    const result = await request.json()
    
    return res.json(result)
}