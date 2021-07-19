export const fetchRequest = async (requestedUrl) => {
    const settings = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        
    };
    
    try {
        const fetchResponse = await fetch(`/api/${requestedUrl}`, settings);
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
        return e;
    }
}